import { TrpcProvider } from "@/components/providers";
import "../style/globals.css";
// import "tailwindcss/tailwind.css";
import { ReactNode } from "react";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/config";
import SessionWrapper from "@/components/SessionWrapper";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    session: Session;
  };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <TrpcProvider>{children}</TrpcProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
