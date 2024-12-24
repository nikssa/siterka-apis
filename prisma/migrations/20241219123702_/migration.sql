-- AlterTable
ALTER TABLE `Post` ADD COLUMN `currency` ENUM('RSD', 'USD', 'EUR') NOT NULL DEFAULT 'RSD',
    MODIFY `description` VARCHAR(2000) NOT NULL;
