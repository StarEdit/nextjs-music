"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const History = () => {
  return (
    <section className="mt-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-bold text-xl">Search History</div>
        <Button variant="ghost">Clear all</Button>
      </div>

      <div className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="relative group">
            <Button className="w-full justify-start" variant="secondary">
              {index}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-all"
            >
              <Trash2 />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
