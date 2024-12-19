import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

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
          <Link
            to="hero-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="technology"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            to="product-card"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="cta-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CoolProgressBar;
