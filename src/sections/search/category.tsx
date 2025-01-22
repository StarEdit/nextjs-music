"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RouteConstant } from "@/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const TabList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  if (!params.get("q")) {
    return;
  }

  const tabValueActive = pathname.split("/")[2] || "all";

  return (
    <Tabs
      value={tabValueActive}
      onValueChange={(value) => {
        if (params.get("page") !== "1") {
          params.set("page", "1");
        }

        if (value === "all") {
          router.push(`${RouteConstant.Search.index}?${params.toString()}`);
        } else {
          router.push(
            `${RouteConstant.Search.index}/${value}?${params.toString()}`
          );
        }
      }}
    >
      <TabsList className="w-full">
        <TabsTrigger className="px-8" value="all">
          All
        </TabsTrigger>
        <TabsTrigger className="px-8" value="song">
          Song
        </TabsTrigger>
        <TabsTrigger className="px-8" value="playlist">
          Playlist
        </TabsTrigger>
        <TabsTrigger className="px-8" value="video">
          Video
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

const Category = () => {
  return (
    <Suspense fallback={null}>
      <TabList />
    </Suspense>
  );
};

export default Category;
