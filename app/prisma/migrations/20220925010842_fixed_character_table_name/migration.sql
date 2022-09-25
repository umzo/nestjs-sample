/*
  Warnings:

  - You are about to drop the `character` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `character`;

-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_number` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Character_student_number_key`(`student_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
