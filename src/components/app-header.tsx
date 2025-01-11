import ThemeToggle from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AppHeader = () => {
  return (
    <header className="w-full flex items-center justify-between gap-2 h-16 px-4">
      <div className="flex-1 flex items-center justify-between">
        <SidebarTrigger />

        <ThemeToggle />
      </div>
    </header>
  );
};

export default AppHeader;
