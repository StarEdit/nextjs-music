import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

type Props = {
  desc: string;
  updatedAt: string;
};

const Header = ({ desc, updatedAt }: Props) => {
  return (
    <div className="mt-4 p-4 rounded-t-md flex items-center justify-between bg-gradient-to-r from-secondary to-primary">
      <div className="flex-1">
        <div className="text-2xl font-bold">Top 100</div>
        <div className="text-xs opacity-60">{`${desc} - Updated: ${updatedAt}`}</div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">Play all</Button>
        <Button variant="outline" size="icon">
          <Share2 />
        </Button>
      </div>
    </div>
  );
};

export default Header;
