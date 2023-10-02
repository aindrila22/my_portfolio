import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetId = href?.replace("#", "");
    const targetElement = document.getElementById(targetId!);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollChange = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    // Check which section is currently in view
    const sections = ["home", "about", "skills", "projects", "contact"];
    for (const section of sections) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <div
      className={`lg:flex hidden justify-between w-full items-center h-24 border-b fixed top-0 z-50 left-0 border-slate-400 border-dashed ${
        scrolling ? "bg-white text-black" : "bg-[#e62c46] text-white"
      }`}
    >
      <div className="text-4xl font-extrabold w-3/12 px-5 text-black">
        Portfolio
      </div>
      <div className="flex justify-evenly items-start w-7/12">
        <Link
          onClick={handleScroll}
          href="#home"
          className={
            activeSection === "home"
              ? `${scrolling ? "text-[#e62c46]" : "text-white"}`
              : `text-black`
          }
        >
          Home
        </Link>
        <Link
          onClick={handleScroll}
          href="#about"
          className={
            activeSection === "about"
              ? "text-[#e62c46]"
              : `${!scrolling ? "text-white" : "text-black"}`
          }
        >
          About
        </Link>
        <Link
          onClick={handleScroll}
          href="#skills"
          className={
            activeSection === "skills"
              ? "text-[#e62c46]"
              : `${!scrolling ? "text-white" : "text-black"}`
          }
        >
          Skills
        </Link>
        <Link
          onClick={handleScroll}
          href="#projects"
          className={
            activeSection === "projects"
              ? "text-[#e62c46]"
              : `${!scrolling ? "text-white" : "text-black"}`
          }
        >
          Projects
        </Link>
        <Link
          onClick={handleScroll}
          href="#contact"
          className={
            activeSection === "contact"
              ? "text-[#e62c46]"
              : `${!scrolling ? "text-white" : "text-black"}`
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
