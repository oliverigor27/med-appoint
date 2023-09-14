/*
  Warnings:

  - You are about to drop the column `permition` on the `users` table. All the data in the column will be lost.
  - Added the required column `permission` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "permition",
ADD COLUMN     "permission" INTEGER NOT NULL;
