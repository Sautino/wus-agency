-- CreateTable
CREATE TABLE "VisitedUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitedUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "quoteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quoteCreatedAt" TIMESTAMP(3) NOT NULL,
    "value" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "categories" TEXT[],

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VisitedUser_id_key" ON "VisitedUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Quote_id_key" ON "Quote"("id");
