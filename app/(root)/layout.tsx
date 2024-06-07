import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";


export const metadata: Metadata = {
  title: "HeyGuru",
  description: "HeyGuru Video App a video calling and conferencing app",
  icons: {
    icon: "/hey-logo1.png",
  }
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default MainLayout;
