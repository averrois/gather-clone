"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import PlayClient with SSR disabled
const PlayClient = dynamic(() => import("../PlayClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen grid place-items-center bg-[#282D4E]">
      <div className="text-white text-xl">Loading game...</div>
    </div>
  ),
});

// Props type to match what page.tsx passes
type PlayClientWrapperProps = {
  mapData: any; // Replace with your actual map_data type
  username: string;
  access_token: string;
  realmId: string;
  uid: string;
  shareId: string;
  initialSkin: string;
  name: string;
};

export default function PlayClientWrapper(props: PlayClientWrapperProps) {
  return <PlayClient {...props} />;
}
