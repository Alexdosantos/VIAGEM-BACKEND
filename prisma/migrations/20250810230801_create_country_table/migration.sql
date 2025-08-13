-- CreateTable
CREATE TABLE "public"."Country" (
    "id" SERIAL NOT NULL,
    "cca2" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT,
    "capital" TEXT,
    "flags" TEXT,
    "population" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);
