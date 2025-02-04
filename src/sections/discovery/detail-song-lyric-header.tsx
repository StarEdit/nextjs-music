import { Button } from "@/components/ui/button";
import { AccountType } from "@/schema-validation/account.schema";
import { Copy } from "lucide-react";

const DetailSongLyricHeader = ({ editor }: { editor: AccountType }) => {
  return (
    <div className="flex items-center justify-between border-b border-primary pb-2 mb-2">
      <div className="text-xs">
        <div className="font-bold">Lyrics</div>
        <div>{`Edited by: ${editor.name}`}</div>
      </div>
      <Button>
        <Copy /> Copy
      </Button>
    </div>
  );
};

export default DetailSongLyricHeader;
