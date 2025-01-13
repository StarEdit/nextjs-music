import AppHeader from "@/components/app-header";
import Footer from "@/components/footer";
import LyricDrawer from "@/components/lyric-drawer";
import CustomPlayer from "@/components/player/custom-player";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <div className="flex-1 p-4 pt-0">{children}</div>
        <Footer />
        <LyricDrawer />
      </div>
      <CustomPlayer />
    </SidebarProvider>
  );
}
