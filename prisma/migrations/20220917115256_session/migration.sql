-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
