import { Job } from "bullmq";

import { getBidderEmailById } from "../../../database/databaseController/bidderController/GetBidderEmailById";

import { getSellerEmailById } from "../../../database/databaseController/sellerController/GetSellerEmailById";

import { AuctionManager } from "../../../manager/AuctionManager";
import { getSpecificBidder } from "../../../database/databaseController/bidderController/GetSpecificBidder";
import { notificationCreate } from "../../../database/databaseController/NotificationController/NotificationCreate";
import { auctionProcessUpdate } from "../../../database/databaseController/auctionController/AuctionProcessUpdate";
import { createNotificationForUser } from "../../../database/databaseController/Notificaton_UserController/CreateNotificationForUser";
import { getSpecificUser } from "../../../database/databaseController/userControlller/GetSpecificUser";

export const processJob = async (job: Job<any>) => {
  const auctionManagerInstance = AuctionManager.getInstance();

  console.log(`Processing job ${job.id}`);
  console.log("Job data --->");
  console.log(job.data.data.id);

  const auctionId = job.data.data.id;

  await auctionManagerInstance.getAuctionDetails(auctionId);
  const { bidderId, sellerId } =
    auctionManagerInstance.determineHighestBidderAndSeller();

  console.log({ bidderId, sellerId });

  if (sellerId && bidderId !== null) {
    // gettting the email of seller and bidder from their specific ID...

    const sellerResponse = await getBidderEmailById(sellerId);
    const bidderResponse = await getSellerEmailById(bidderId);

    const bidderEmail = bidderResponse.specificSellerEmail?.email;
    const sellerEmail = sellerResponse.specificBidderEmail?.email;

    console.log(bidderEmail, sellerEmail);

    if (bidderEmail && sellerEmail !== undefined) {
      const responseOfBidderUser = await getSpecificUser(bidderEmail);
      const responseOfSellerUser = await getSpecificUser(sellerEmail);

      const userIdOfBidder = responseOfBidderUser.specificUser?.id
        ? responseOfBidderUser.specificUser.id
        : 0;

      const userIdOfSeller = responseOfSellerUser.specificUser?.id
        ? responseOfSellerUser.specificUser.id
        : 0;

      console.log("userIdOfBidder, userIdOfSeller");
      console.log(userIdOfBidder, userIdOfSeller);

      await createNotificationForUser({
        message: `Hello I am your notification  ${bidderEmail}`,
        userId: userIdOfBidder,
      });

      await createNotificationForUser({
        message: `Hello I am your notification  ${sellerEmail}`,
        userId: userIdOfSeller,
      });
    }
  }
  await auctionProcessUpdate(auctionId, true);
};
