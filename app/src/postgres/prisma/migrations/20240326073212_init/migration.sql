/*
  Warnings:

  - Made the column `processed` on table `Auction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Auction" ALTER COLUMN "processed" SET NOT NULL;
