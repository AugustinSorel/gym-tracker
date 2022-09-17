/*
  Warnings:

  - A unique constraint covering the columns `[sessionId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sessionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_sessionId_key" ON "User"("sessionId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
