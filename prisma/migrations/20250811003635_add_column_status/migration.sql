-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('VISITED', 'WISHLIST');

-- AlterTable
ALTER TABLE "public"."Country" ADD COLUMN     "status" "public"."Status";
