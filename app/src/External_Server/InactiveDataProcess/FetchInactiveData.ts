import { getInactiveAuction } from "../../database/databaseController/auctionController/GetInactiveAuction";

export const fetchInactiveData = async () => {
  const response = await getInactiveAuction();

  return response.recentInactiveAuctions;
};
