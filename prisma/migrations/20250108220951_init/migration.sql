/*
  Warnings:

  - You are about to drop the column `numReviws` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "numReviws",
ADD COLUMN     "numReviews" INTEGER NOT NULL DEFAULT 0;
