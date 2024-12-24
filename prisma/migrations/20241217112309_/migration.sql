/*
  Warnings:

  - You are about to drop the column `age` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `cell` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `mail` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `photosId` on the `Post` table. All the data in the column will be lost.
  - The values [man] on the enum `Profile_gender` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `car` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childAgeGroup` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleaning` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleaningChildOnly` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cooking` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cookingChildOnly` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driversLicense` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earnings` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `earningsRate` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstAid` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inOwnHouse` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notSmoking` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherLanguages` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outWithChild` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pets` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopping` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sitterCourse` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialNeeds` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Made the column `bio` on table `Profile` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `acceptTerms` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Photo` DROP FOREIGN KEY `Photo_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `Photo` DROP FOREIGN KEY `Photo_id_fkey`;

-- DropIndex
DROP INDEX `Post_photosId_key` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `age`,
    DROP COLUMN `cell`,
    DROP COLUMN `content`,
    DROP COLUMN `mail`,
    DROP COLUMN `photosId`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `availability` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `birthDate` DATETIME(3) NULL,
    ADD COLUMN `car` BOOLEAN NOT NULL,
    ADD COLUMN `childAgeGroup` JSON NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `cleaning` BOOLEAN NOT NULL,
    ADD COLUMN `cleaningChildOnly` BOOLEAN NOT NULL,
    ADD COLUMN `cooking` BOOLEAN NOT NULL,
    ADD COLUMN `cookingChildOnly` BOOLEAN NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `driversLicense` BOOLEAN NOT NULL,
    ADD COLUMN `earnings` INTEGER NOT NULL,
    ADD COLUMN `earningsRate` ENUM('Hourly', 'Daily', 'Weekly', 'Monthly') NOT NULL,
    ADD COLUMN `education` ENUM('Elementary', 'High_School', 'College', 'Graduate') NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `experience` INTEGER NOT NULL,
    ADD COLUMN `experienceTimeUnit` ENUM('months', 'years') NOT NULL DEFAULT 'years',
    ADD COLUMN `firstAid` BOOLEAN NOT NULL,
    ADD COLUMN `inOwnHouse` BOOLEAN NOT NULL,
    ADD COLUMN `languages` JSON NOT NULL,
    ADD COLUMN `notSmoking` BOOLEAN NOT NULL,
    ADD COLUMN `numberOfChildren` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `otherLanguages` VARCHAR(191) NOT NULL,
    ADD COLUMN `outWithChild` BOOLEAN NOT NULL,
    ADD COLUMN `pets` BOOLEAN NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `shopping` BOOLEAN NOT NULL,
    ADD COLUMN `sitterCourse` BOOLEAN NOT NULL,
    ADD COLUMN `specialNeeds` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `bio` VARCHAR(191) NOT NULL,
    MODIFY `gender` ENUM('male', 'female', 'other') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `acceptTerms` BOOLEAN NOT NULL,
    ADD COLUMN `membership` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `name` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Profile`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
