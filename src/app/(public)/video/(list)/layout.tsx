import DiscoveryMenu from "@/sections/discovery/discovery-menu";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full flex items-center justify-center border-b pb-2">
        <DiscoveryMenu basePath="/video" />
      </div>
      <div>{children}</div>
    </div>
  );
}
