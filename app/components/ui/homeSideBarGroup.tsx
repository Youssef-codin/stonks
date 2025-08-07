import { ChevronDown } from "lucide-react";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "./sidebar/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./sidebar/collapsible";
import { IconHeart } from "@tabler/icons-react";

export function HomeSideBarGroup() {
  return (
    <Collapsible defaultOpen={false} className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="justify-start">
            <IconHeart className="w-8 h-8 flex" />
            <label className="transition-transform hidden group-data-[state=open]/collapsible:"> hey there</label>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent />
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}
