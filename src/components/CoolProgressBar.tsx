import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoolProgressBar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { id: "#hero-section", index: 1 },
      { id: "#technology", index: 2 },
      { id: "#product-card", index: 3 },
      { id: "#features", index: 4 },
      { id: "#cta-section", index: 5 },
    ];

    sections.forEach(({ id, index }) => {
      gsap.to(id, {
        scrollTrigger: {
          trigger: id,
          start: "top 70%",
          end: "bottom 70%",
          toggleClass: {
            targets: `.progress-bar li:nth-child(${index})`,
            className: "active",
          },
        },
      });
    });

    // Fix hover bug
    const sidebar = sidebarRef.current;

    if (sidebar) {
      const handleMouseEnter = () => {
        sidebar.classList.add("hover");
      };

      const handleMouseLeave = () => {
        sidebar.classList.remove("hover");
      };

      sidebar.addEventListener("mouseenter", handleMouseEnter);
      sidebar.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        sidebar.removeEventListener("mouseenter", handleMouseEnter);
        sidebar.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div id="sidebar" ref={sidebarRef}>
      <ul className="progress-bar">
        <li>
          <a href="#hero-section">Home</a>
        </li>
        <li>
          <a href="#technology">Technology</a>
        </li>
        <li>
          <a href="#product-card">Products</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#cta-section">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default CoolProgressBar;
