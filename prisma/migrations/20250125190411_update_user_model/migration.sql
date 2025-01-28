/*
  Warnings:

  - The `roles` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CUSTOMER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "roles" "Role"[];

-- CreateTable
CREATE TABLE "Battle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Battle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
