import { siteConfig } from "@/config/site";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 bg-inherit flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-inherit uppercase">{siteConfig.name}</p>
      <div className="flex gap-4">
        {siteConfig.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit border border-black dark:border-white rounded-full text-center p-1 flex items-center justify-center hover:opacity-90 active:opacity-80 active:scale-95 "
          >
            <link.Icon />
          </a>
        ))}
      </div>
      <p className="text-sm text-inherit">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
