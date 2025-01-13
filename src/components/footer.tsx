import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Guitar,
  Instagram,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col px-4 pt-4">
        <div className="flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Product
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Terms
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button variant="link" size="icon">
              <Facebook />
            </Button>
            <Button variant="link" size="icon">
              <Instagram />
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="pb-6">
          <div className="flex items-center gap-8 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Guitar className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">T-music</span>
                <span className="truncate text-xs">Enjoy the music</span>
              </div>
            </div>

            <div>
              <div className="font-bold text-lg">T-music</div>
              <div className="font-bold opacity-50">Website owner: NPT</div>
            </div>
          </div>
          <div className="text-xs opacity-50">
            Social Network License Number 499/GP-BTTTT issued by Ministry of
            Information and Communications on Sep 28th, 2015.
          </div>
          <div className="text-xs opacity-50">
            Business Registration Certificate Number 0305535715 issued by
            Department of Planning and Investment of HCMC on 01/03/2008.
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-secondary min-h-10 px-4">
        <div className="flex items-center gap-2">
          <MapPinned size={16} />
          <span className="text-xs">Place, District, Province, Country</span>
        </div>
        <div className="flex items-center gap-2">
          <PhoneCall size={16} />
          <span className="text-xs">xxx - xxx - xxxx</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
