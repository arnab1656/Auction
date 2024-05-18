import { addInactiveAuctionToQueue } from "./ProviderToQueue/Provider";

export const queueAdditionForInactiveAuction = (input: any) => {
  console.log("input");
  console.log(input);

  input.map((inactiveAuction: any) => {
    addInactiveAuctionToQueue(inactiveAuction)
      .then(() => {
        console.log("Succesfully executed the addInactiveAuctionToQueue");
      })
      .catch(() => {
        console.log("Not succesfully executed the addInactiveAuctionToQueue");
      });

    console.log("auction from queueAddition function");
    console.log(inactiveAuction);
  });
};
