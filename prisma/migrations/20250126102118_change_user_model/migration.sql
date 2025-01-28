/*
  Warnings:

  - You are about to drop the `Battle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Battle" DROP CONSTRAINT "Battle_userId_fkey";

-- DropTable
DROP TABLE "Battle";

-- CreateTable
CREATE TABLE "Walfare" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Walfare_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Walfare" ADD CONSTRAINT "Walfare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
