"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [localTheme, setLocalTheme] = useState<string | undefined>();

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  return localTheme === "light" ? (
    <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  ) : (
    <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  );
};

export default ThemeToggle;
