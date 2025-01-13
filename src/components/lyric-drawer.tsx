"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import usePlayer from "@/hooks/use-player";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const lines = [
  "Dòng 1",
  "Dòng 2",
  "Dòng 3",
  "Dòng 4",
  "Dòng 5",
  "Dòng 6",
  "Dòng 7",
  "Dòng 8",
  "Dòng 9",
  "Dòng 10",
  "Dòng 1",
  "Dòng 2",
  "Dòng 3",
  "Dòng 4",
  "Dòng 5",
  "Dòng 6",
  "Dòng 7",
  "Dòng 8",
  "Dòng 9",
  "Dòng 10",
  "Dòng 1",
  "Dòng 2",
  "Dòng 3",
  "Dòng 4",
  "Dòng 5",
  "Dòng 6",
  "Dòng 7",
  "Dòng 8",
  "Dòng 9",
  "Dòng 10",
  "Dòng 1",
  "Dòng 2",
  "Dòng 3",
  "Dòng 4",
  "Dòng 5",
  "Dòng 6",
  "Dòng 7",
  "Dòng 8",
  "Dòng 9",
  "Dòng 10",
];

const LyricDrawer = () => {
  const { isKaraoke, handleKaraoke } = usePlayer();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === lines.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeItem = listRef.current?.children[activeIndex];
    if (activeItem) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <Drawer open={isKaraoke} onOpenChange={(value) => handleKaraoke(value)}>
      <DrawerContent className="w-[calc(100%-20rem)] h-screen">
        <div className="flex-1 flex flex-col justify-between">
          <DrawerHeader className="flex items-center justify-center">
            <DrawerTitle>Lyrics</DrawerTitle>
          </DrawerHeader>
          <div className="h-[calc(100vh-9rem)] overflow-hidden" ref={listRef}>
            {lines.map((line, index) => (
              <div
                key={index}
                className={cn("text-center transition-colors duration-300", {
                  "text-active text-xl": index === activeIndex,
                })}
              >
                {line}
              </div>
            ))}
          </div>
          <DrawerFooter className="items-center">
            <DrawerClose asChild>
              <Button variant="outline" size="icon">
                <CircleX />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LyricDrawer;
