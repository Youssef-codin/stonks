import { getAllData, getCoinChartData, getCoinData, getTopGainers, getTopLosers } from "~/api.js";
import type { Route } from "./+types/home.tsx";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebarAnimated";
import {
  IconHeart,
  IconLayoutDashboard as HomeIcon,
  IconInfoHexagon as AboutIcon,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import brandLogo from '/stonks3d.ico';
import { TopBar } from "../components/home/TopBar.js";
import { Dashboard } from "../components/home/DashBoard.js";
import { type ChartCardPropsType } from "~/components/home/Cards/ChartCard.js";
import { TopGainersCard } from "~/components/home/Cards/TopGainersCard.js";

export async function clientLoader() {
  await getAllData();
  const bitcoinData = await getCoinData("bitcoin");
  console.log(bitcoinData);

  const bitcoinChartData = await getCoinChartData("bitcoin");
  const topGainers = await getTopGainers();
  const topLosers = await getTopLosers();
  console.log(topGainers);
  console.log(topLosers);


  return { bitcoinData, bitcoinChartData, topGainers, topLosers };
}

export default function home({ loaderData }: Route.ComponentProps) {

  loaderData.bitcoinChartData.push({ date: Date.now(), price: loaderData.bitcoinData.market_data.current_price.usd })

  const chartData: ChartCardPropsType = {
    title: "BTC",
    prices: loaderData.bitcoinChartData
  };

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <HomeIcon className="h-7 w-7 shrink-0 text-[var(--text-muted)]" />
      )
    },
    {
      label: "Favorites",
      href: "#",
      icon: (
        <IconHeart className="h-7 w-7 shrink-0 text-[var(--text-muted)]" />
      ),
    },
  ];

  const [open, setOpen] = useState(true); //FIXME: change to false when not testing
  return (
    // holds the whole thing
    <div className="flex w-full flex-1 flex-col md:flex-row overflow-hidden h-screen bg-[var(--bg-dark)] ">
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
                <AboutIcon className="h-7 w-7 shrink-0 text-[var(--text-muted)]" />
              ),
            }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-full ">
        <TopBar />
        <Dashboard bitcoinData={loaderData.bitcoinData} bitcoinChartData={chartData} TopGainersList={loaderData.topGainers} TopLosersList={loaderData.topLosers} />
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
        className="text-2xl font-semibold whitespace-pre text-[var(--text-muted)]">
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
}
