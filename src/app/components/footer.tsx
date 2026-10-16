
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#292B32] bg-[#0C0D10]">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 md:px-8 lg:px-10">
        {/* Logo - Left Side */}
        <Link
          href="/"
          aria-label="FitLog home"
          className="flex items-center gap-2"
        >
          <Image
            src="/footerLogo.png"
            alt="FitLog logo"
            width={20}
            height={20}
          />

          <span className="font-(family-name:--font-oswald text-sm font-bold uppercase tracking-wide text-white">
            Fit<span className="text-[#CCFF00]">Log</span>
          </span>
        </Link>

        {/* Copyright - Right Side */}
        <p className="text-center text-xs text-[#9CA3AF] sm:text-right">
          © 2026 FitLog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;