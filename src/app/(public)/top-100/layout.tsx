import Menu from "@/sections/top-100/menu";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="w-full flex items-center justify-center border-b pb-2">
        <Menu />
      </div>
      <div>{children}</div>
    </div>
  );
}
