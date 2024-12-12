/*
  Warnings:

  - You are about to drop the column `confirmPassword` on the `signupuser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `signupuser` DROP COLUMN `confirmPassword`,
    ALTER COLUMN `updated_at` DROP DEFAULT;
