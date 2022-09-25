/*
  Warnings:

  - You are about to alter the column `student_number` on the `Character` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Character` MODIFY `student_number` INTEGER NOT NULL;
