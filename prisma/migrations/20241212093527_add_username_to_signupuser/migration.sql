/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Signupuser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Signupuser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `signupuser` ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Signupuser_username_key` ON `Signupuser`(`username`);
