"use client";

import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", ShowButtonClick);
    return () => {
      window.removeEventListener("scroll", ShowButtonClick);
    };
  }, []);

  return (
    <div>
      {" "}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 shadow-md fixed bottom-10 right-10 bg-white rounded-md transition duration-300 z-10"
        >
          <Image alt="top arrow images" src="./arrow-top.svg"></Image>
        </button>
      )}
    </div>
  );
};

export default TopButton;
