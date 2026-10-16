
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { ItemsContext } from "./context/appContext";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const {addToPlan, addToSaved} = useContext(ItemsContext)

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/myplan" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full  text-white">
      <nav className="container mx-auto flex min-h-18.5 w-full items-center bg-[#0C0D10] justify-between px-4 sm:px-6 lg:px-7 border-b border-[#242529]">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={38}
            height={38}
            priority
            className="h-9.5 w-9.5 object-contain"
          />

          <span className="text-[25px] font-extrabold tracking-[1px]">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation: lg and above */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5.5 py-2.5 text-[15px] font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-[#1C2710] text-[#CCFF00]"
                  : "text-[#A1A1AA] hover:bg-[#191A1E] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Counters */}
        <div className="hidden items-center gap-7 sm:flex">
          <Link
            href="/myplan"
            className="flex items-center gap-3 text-[15px] text-[#D4D4D8] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#CCFF00] px-2 font-bold text-black">
              {addToPlan.length}
            </span>
          </Link>

          <Link
            href="/myplan"
            className="flex items-center gap-3 text-[15px] text-[#A1A1AA] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#393B42] px-2 text-[#D4D4D8]">
              {addToSaved.length}
            </span>
          </Link>
        </div>

        {/* Hamburger: below lg */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition hover:bg-[#202126] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile and Tablet Menu */}
      {menuOpen && (
        <div className="border-t border-[#242529] bg-[#0C0D10] px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {/* Navigation Links */}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-[#1C2710] text-[#CCFF00]"
                    : "text-[#D4D4D8] hover:bg-[#191A1E]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile and Tablet Counters */}
            <div className="mt-2flex gap-3 border-t border-[#242529] pt-4">
              <Link
                href="/myplan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg bg-[#191A1E] px-4 py-3"
              >
                <span className="text-sm">Plan</span>

                <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#CCFF00] px-2 text-sm font-bold text-black">
                  {addToPlan.length}
                </span>
              </Link>

              <Link
                href="/myplan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg bg-[#191A1E] px-4 py-3"
              >
                <span className="text-sm">Saved</span>

                <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#393B42] px-2 text-sm text-white">
                  {addToSaved.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;