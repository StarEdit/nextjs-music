"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { RouteConstant } from "@/constant";
import { cn } from "@/lib/utils";

const SearchContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQuery = (value: string) => {
    params.set("q", value);
    params.set("page", "1");

    return params.toString();
  };

  const handleClear = () => {
    if (params.get("q")) {
      params.delete("q");
      router.push(RouteConstant.Search.index);
    }

    setValue("");
    inputRef?.current?.focus();
  };

  useEffect(() => {
    if (!pathname.startsWith("/search")) {
      setValue("");
    }
  }, [pathname]);

  return (
    <div className="relative w-full mx-10">
      <Search
        size={16}
        className={cn("absolute text-input top-1/2 -translate-y-1/2 left-2", {
          "text-primary": value,
        })}
      />
      <Input
        ref={inputRef}
        className="px-8"
        placeholder="Search..."
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        onKeyUp={(evt) => {
          if (evt.key === "Enter") {
            router.push(`${RouteConstant.Search.index}?${handleQuery(value)}`);
          }

          if (evt.key === "Backspace" && value === "") {
            handleClear();
          }
        }}
      />
      <X
        size={16}
        className={cn("absolute hidden top-1/2 -translate-y-1/2 right-2", {
          block: value,
        })}
        onClick={handleClear}
      />
    </div>
  );
};

const SearchHeader = () => {
  return (
    <Suspense fallback={null}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchHeader;
