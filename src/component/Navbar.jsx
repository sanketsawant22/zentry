import gsap from "gsap/all";
import React, { useRef, useState, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const navContent = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navRef = useRef(null);
  const audioBtn = useRef(null);

  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);
  const [playing, setplaying] = useState(true);
  const [indicatorActive, setindicatorActive] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      navRef.current.classList.add("floating-nav");
    }

    setlastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
      ease: "power1.inOut",
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (playing) {
      audioBtn.current.play();
    } else {
      audioBtn.current.pause();
    }
  }, [playing]);

  const playAudio = () => {
    setplaying((prev) => !prev);
    setindicatorActive((prev) => !prev);
  };

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src="/img/logo.png" alt="logo" className="w-10 mr-5" />
            <button className="navBtn uppercase flex gap-1 items-center justify-center grop relative z-10 cursor-pointer overflow-hidden rounded-2xl bg-blue-75 px-3 py-2 text-[0.6rem] font-semibold text-black">
              <span className="font-general">Products</span>
              <TiLocationArrow className="text-xs" />
            </button>
            <button className="navBtn uppercase flex gap-1 items-center justify-center grop relative z-10 cursor-pointer overflow-hidden rounded-2xl bg-blue-75 px-3 py-2 text-[0.6rem] font-semibold text-black">
              <span className="font-general">Whitepaper</span>
              <TiLocationArrow className="text-xs" />
            </button>
          </div>

          <div className=" flex h-full items-center">
            <div className="flex-row gap-1 hidden md:flex w-fit">
              {navContent.map((item, index) => (
                <div className="flex items-center" key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-bold text-xs font-general nav-hover-btn"
                  >
                    {item}
                  </a>
                  {index < 2 && (
                    <TiLocationArrow className="text-white ml-1 scale-90" />
                  )}
                </div>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={playAudio}
            >
              <audio
                ref={audioBtn}
                src="/audio/loop.mp3"
                className="hidden"
                loop
              />
              {[1, 2, 3, 4].map((bar, index) => {
                const randomDelay = (Math.random() * 0.7).toFixed(2); // Generate a random delay between 0 and 0.7 seconds
                return (
                  <div
                    key={index}
                    className={`indicator-line ${
                      indicatorActive ? "active" : ""
                    }`}
                    style={{ animationDelay: `${randomDelay}s` }}
                  />
                );
              })}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
