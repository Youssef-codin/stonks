import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebarAnimated";
import {
  IconHeart,
  IconLayoutDashboard as HomeIcon,
  IconInfoHexagon as AboutIcon,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import brandLogo from '/stonks3d.ico'
import { SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel } from "./ui/sidebar/sidebar";
import { Plus } from "lucide-react";
import { HomeSideBarGroup } from "./ui/homeSideBarGroup";

export function HomeSideBar() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <HomeIcon className="h-7 w-7 shrink-0 text dark:text" />
      )
    },
    // {
    //   label: "Favorites",
    //   href: "#",
    //   icon: (
    //     <IconHeart className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
    //   ),
    // },
  ];
  const [open, setOpen] = useState(true); //FIXME:
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <LogoOpen /> : <LogoClosed />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <HomeSideBarGroup />
            </div>
          </div>
          <div>
            <SidebarLink link={{
              label: "About", href: "#", icon: (
                <AboutIcon className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200" />
              ),
            }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const LogoOpen = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src={brandLogo} className="h-8 w-8 shrink-0 " />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-semibold whitespace-pre text-black dark:text-white">
        Stonks
      </motion.span>
    </a>
  );
};

export const LogoClosed = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1" >
      <img src={brandLogo} className="h-8 w-8 shrink-0 " />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
