/*
  Warnings:

  - A unique constraint covering the columns `[photosId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cell` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mail` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photosId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `age` ENUM('EighteenToTwentyFive', 'TwentyFiveToForty', 'FortyToFiftyFive', 'FiftyFiveToSixtyFive', 'OverSixtyFive') NOT NULL,
    ADD COLUMN `cell` INTEGER NOT NULL,
    ADD COLUMN `mail` VARCHAR(191) NOT NULL,
    ADD COLUMN `photosId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Profile` ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `gender` ENUM('man', 'female') NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,

    UNIQUE INDEX `Photo_authorId_key`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Post_photosId_key` ON `Post`(`photosId`);

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_id_fkey` FOREIGN KEY (`id`) REFERENCES `Post`(`photosId`) ON DELETE RESTRICT ON UPDATE CASCADE;
