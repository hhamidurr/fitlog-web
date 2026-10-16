
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // আপাতত Demo Counter
  // পরে Context API বা LocalStorage-এর সাথে যুক্ত করবে
  const planCount = 0;
  const savedCount = 0;

  const links = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#242529] bg-[#0C0D10] text-white">
      <nav className="mx-auto flex min-h-[74px] w-full items-center justify-between px-4 sm:px-6 lg:px-7">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={38}
            height={38}
            priority
            className="h-[38px] w-[38px] object-contain"
          />

          <span className="text-[25px] font-extrabold tracking-[1px]">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith("/my-plan/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-[22px] py-[10px] text-[15px] font-medium transition-colors ${
                  active
                    ? "bg-[#1C2710] text-[#CCFF00]"
                    : "text-[#A1A1AA] hover:bg-[#191A1E] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side Counters */}
        <div className="hidden items-center gap-7 sm:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-3 text-[15px] text-[#D4D4D8] transition hover:text-white"
          >
            <span>Plan</span>
            <span className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full bg-[#CCFF00] px-2 font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-3 text-[15px] text-[#A1A1AA] transition hover:text-white"
          >
            <span>Saved</span>
            <span className="flex h-[28px] min-w-[28px] items-center justify-center rounded-full border border-[#393B42] px-2 text-[#D4D4D8]">
              {savedCount}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white hover:bg-[#202126] sm:hidden"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#242529] bg-[#0C0D10] px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith("/my-plan/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 ${
                    active
                      ? "bg-[#1C2710] text-[#CCFF00]"
                      : "text-[#D4D4D8] hover:bg-[#191A1E]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-2 flex gap-3 border-t border-[#242529] pt-4">
              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg bg-[#191A1E] px-4 py-3"
              >
                <span>Plan</span>
                <span className="rounded-full bg-[#CCFF00] px-2 py-1 text-sm font-bold text-black">
                  {planCount}
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-lg bg-[#191A1E] px-4 py-3"
              >
                <span>Saved</span>
                <span className="rounded-full border border-[#393B42] px-2 py-1 text-sm">
                  {savedCount}
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