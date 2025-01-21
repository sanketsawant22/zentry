import React from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen h-dvh bg-violet-300 py-4 text-black">
      <h1 className="w-screen special-font hero-heading text-black text-center lg:text-[30rem] pb-24">
        Z<b>E</b>NTR<b>Y</b>
      </h1>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Nova 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-11 md:justify-start">
          <a
            target="_blank"
            rel="noopener noreffer"
            className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-white"
            href="https://discord.com"
          >
            <FaDiscord />
          </a>
          <a
            target="_blank"
            rel="noopener noreffer"
            className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-white"
            href="https://twitter.com"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreffer"
            className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-white"
            href="https://github.com"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noopener noreffer"
            className="text-black text-2xl transition-colors duration-500 ease-in-out hover:text-white"
            href="https://twitch.com"
          >
            <FaTwitch />
          </a>
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
