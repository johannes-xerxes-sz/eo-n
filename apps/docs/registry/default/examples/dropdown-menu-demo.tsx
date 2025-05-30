import {
  Bell,
  ChevronRight,
  Cloud,
  Download,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Settings,
  Share2,
  Upload,
  User,
} from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />
      <DropdownMenuContent className="w-44">
        <DropdownMenuItem>
          <Home />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText />
          Documents
        </DropdownMenuItem>
        <DropdownMenu>
          <DropdownMenuSubMenuTrigger
            render={
              <DropdownMenuItem closeOnClick={false}>
                <Cloud />
                File Actions
                <ChevronRight className="ml-auto" />
              </DropdownMenuItem>
            }
          />
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem>
              <Upload />
              Upload Files
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download />
              Download Files
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share2 />
              Share Files
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenuSeparator className="mt-1" />
        <DropdownMenuGroup>
          <DropdownMenuGroupLabel>Preferences</DropdownMenuGroupLabel>
          <DropdownMenuItem disabled>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle />
            Help & Support
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-1" />
        <DropdownMenuItem>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
