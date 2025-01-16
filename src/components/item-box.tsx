import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

type ItemBoxType = {
  groupClassName?: string;
  showButton?: boolean;
  showTitle?: boolean;
  title?: string;
  url: string;
};

const ItemBox = ({
  groupClassName,
  showButton = false,
  showTitle = false,
  title,
  url,
}: ItemBoxType) => {
  return (
    <div
      className={cn(
        "relative w-full h-40 rounded-md overflow-hidden cursor-pointer group",
        groupClassName
      )}
    >
      <div
        className="h-full w-full rounded-md bg-cover bg-no-repeat transition-all duration-500 group-hover:scale-125 group-focus:scale-125 group-hover:opacity-60"
        style={{ backgroundImage: `url(${url})` }}
      />
      {showButton && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Button variant="outline" size="icon" className="rounded-full">
            <Play />
          </Button>
        </div>
      )}

      {showTitle && title && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl group-hover:text-2xl transition-all duration-300 font-bold">
          {title}
        </div>
      )}
    </div>
  );
};

export default ItemBox;
