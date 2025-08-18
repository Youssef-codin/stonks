import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebarAnimated";
import {
  IconHeart,
  IconLayoutDashboard as HomeIcon,
  IconInfoHexagon as AboutIcon,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import brandLogo from '/stonks3d.ico'
import { TopBar } from "./TopBar";
import { Dashboard } from "./DashBoard";

export function HomeSideBar() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <HomeIcon className="h-7 w-7 shrink-0 text dark:text" />
      )
    },
    {
      label: "Favorites",
      href: "#",
      icon: (
        <IconHeart className="h-7 w-7 shrink-0 text-neutral-700 dark:text-neutral-200 " />
      ),
    },
  ];

  const [open, setOpen] = useState(true); //FIXME: change to false when not testing
  return (
    // holds the whole thing
    <div className="flex w-full flex-1 flex-col md:flex-row overflow-hidden h-screen bg-neutral-100 dark:bg-neutral-800">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <LogoOpen /> : <LogoClosed />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
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
      <div className="w-full ">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export const LogoOpen = () => {
  return (
    <a
      href="#"
      className="relative flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src={brandLogo} className="z-20 h-8 w-8 shrink-0 " />
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
    <a href="#" className="relative flex items-center space-x-2 py-1" >
      <img src={brandLogo} className="z-20 h-8 w-8 shrink-0 " />
    </a>
  );
};


