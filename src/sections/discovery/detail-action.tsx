import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AccountType } from "@/schema-validation/account.schema";
import { Share2 } from "lucide-react";

const DetailAction = ({ uploadedBy }: { uploadedBy: AccountType }) => {
  return (
    <div className="bg-secondary rounded-md mt-4 p-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={uploadedBy.src} />
          <AvatarFallback className="text-xs bg-primary text-secondary">
            {uploadedBy.name}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-xs">Uploaded By:</div>
          <div className="text-active">{uploadedBy.name}</div>
        </div>
      </div>

      <Button size="icon">
        <Share2 />
      </Button>
    </div>
  );
};

export default DetailAction;
