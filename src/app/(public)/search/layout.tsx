import Category from "@/sections/search/category";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Category />
      {children}
    </div>
  );
}
