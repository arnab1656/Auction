-- CreateTable
CREATE TABLE "Notification_User" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Notification_User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification_User" ADD CONSTRAINT "Notification_User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;