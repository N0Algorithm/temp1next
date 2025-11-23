"use client";

import { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("/");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light"; // default to light
    const stored = localStorage.getItem("theme");
    return stored || "light";
  });
  const menuBtnRef = useRef(null);
  const panelRef = useRef(null);
  const pathname = usePathname?.() || "/";

  // Centralized nav items so desktop and mobile stay in sync
  const navItems = [
    { id: "home", label: "Home", href: "/", match: "/" },
    { id: "about", label: "About Us", href: "/about", match: "/about" },
    { id: "products", label: "Products", href: "/products", match: "/products" },
    { id: "team", label: "Our Team", href: "/team", match: "/team" },
    { id: "contact", label: "Contact Us", href: "/contact", match: "/contact" },
  ];

  const segClass = (selected) => {
    // Normalize height and border so icons/text stay perfectly centered in both states
    const base =
      "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold leading-none border h-9 sm:h-10 px-3 sm:px-4 py-0 whitespace-nowrap transition-colors";
    if (selected) {
      return (
        base +
        " " +
        (theme === "dark"
          ? "bg-gray-900 text-white border-gray-600 shadow cursor-default"
          : "bg-white text-gray-900 border-gray-300 shadow cursor-default")
      );
    }
    return (
      base +
      " " +
      (theme === "dark"
        ? "text-gray-300 hover:text-white border-transparent cursor-pointer"
        : "text-gray-700 hover:text-gray-900 border-transparent cursor-pointer")
    );
  };

  // Compute link href: when on Home, use in-page anchors (#id). Else, send to Home with hash.
  const linkHrefFor = (item) => {
    if (!item?.id) return item.href;
    if (pathname === "/") return `#${item.id}`;
    return `/#${item.id}`;
  };

  const navItemClass = (isActive) => {
    const base =
      "px-3 py-1.5 rounded-full text-sm font-semibold transition-colors border";
    if (isActive) {
      return (
        base +
        " " +
        (theme === "dark"
          ? "bg-gray-900 text-white border-gray-600 shadow"
          : "bg-white text-gray-900 border-gray-300 shadow")
      );
    }
    return (
      base +
      " " +
      (theme === "dark"
        ? "text-gray-300 hover:text-white border-transparent"
        : "text-gray-700 hover:text-gray-900 border-transparent")
    );
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Also toggle a css-vars based class for the new pill switcher styling
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keep active state in sync with route path as a baseline
  useEffect(() => {
    // If a section is observed later, it will override this
    const match = navItems.find((n) => pathname.startsWith(n.match));
    setActive(match ? match.href : pathname || "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Scroll spy: if the current page renders sections with matching IDs,
  // highlight the one most in view. Falls back to route-based highlight.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = navItems.map((n) => n.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return; // nothing to observe on this page

    const opts = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // focus roughly middle of viewport
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    };

    let current = active;
    const observer = new IntersectionObserver((entries) => {
      // Choose the entry with the greatest intersection ratio that is intersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        const id = visible[0].target.id;
        const matched = navItems.find((n) => n.id === id);
        if (matched && current !== matched.href) {
          current = matched.href;
          setActive(matched.href);
        }
      }
    }, opts);

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`relative mx-auto mt-6 w-[92%] md:w-[85%] lg:w-[70%] max-w-6xl rounded-full transition-all duration-500
      ${isScrolled ? "shadow-2xl" : "shadow-lg"}`}
      style={
        theme === "dark"
          ? {
              background: "linear-gradient(90deg,#111117 0%, #1b1b27 100%)",
              color: "#fff",
            }
          : { background: "rgba(255,255,255,0.95)", color: "#111" }
      }
    >
  <div className="relative flex items-center justify-between px-4 md:px-6 py-2.5">
        {/* Left: logo + primary links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/icon.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="hidden sm:inline font-semibold text-lg tracking-tight">
              Rev Groups
            </span>
          </Link>
        </div>

        {/* Center: desktop links */}
        <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={linkHrefFor(item)}
                aria-current={isActive ? "page" : undefined}
                className="inline-block focus:outline-none"
                title={item.label}
              >
                <div className="cursor-box pointer">{item.label}</div>
              </Link>
            );
          })}
        </div>

        {/* Right: actions - segmented Light/Dark toggle */}
        <div className="flex items-center gap-3">
          {/* Radio-based pill theme switcher with sliding indicator */}
          <div
            role="radiogroup"
            aria-label="Theme toggle"
            className="theme-switcher nav-size shadow-inner"
          >
            <input
              type="radio"
              id="light-theme"
              name="themes"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
              aria-label="Light mode"
            />
            <label htmlFor="light-theme">
              <span>
                <FiSun className="w-4 h-4" />
                <span className="hidden sm:inline">Light</span>
              </span>
            </label>

            <input
              type="radio"
              id="dark-theme"
              name="themes"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
              aria-label="Dark mode"
            />
            <label htmlFor="dark-theme">
              <span>
                <FiMoon className="w-4 h-4" />
                <span className="hidden sm:inline">Dark</span>
              </span>
            </label>

            <span className="slider" />
          </div>

          {/* Hamburger on the right side of Light/Dark toggle (mobile only) */}
          <button
            ref={menuBtnRef}
            onClick={() => setOpen(!open)}
            className={`lg:hidden focus:outline-none inline-flex items-center justify-center w-9 h-9 rounded-lg ${
              theme === "light"
                ? "text-gray-700 bg-gray-100 border border-gray-300"
                : "text-gray-200 bg-white/5 ring-1 ring-white/10"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            title={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile expanded menu - floating panel */}
      <div
        className={`${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        } lg:hidden transition-all duration-200 ease-out absolute left-2 right-2 top-full mt-3 z-30`}
      >
        <div
          ref={panelRef}
          id="mobile-menu"
          className={`rounded-2xl shadow-2xl ${
            theme === "dark"
              ? "bg-black text-white ring-1 ring-white/10"
              : "bg-white text-gray-900 ring-1 ring-gray-200"
          }`}
        >
          <ul className="px-2 py-2">
            {navItems.map((item, idx) => (
              <li key={item.href}>
                <Link
                  href={linkHrefFor(item)}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 text-[0.95rem] font-medium rounded-xl ${
                    theme === "dark" ? "hover:bg-white/5" : "hover:bg-gray-50"
                  } ${
                    idx !== navItems.length - 1
                      ? theme === "dark"
                        ? "border-b border-white/10"
                        : "border-b border-gray-200"
                      : ""
                  }`}
                  aria-current={active === item.href ? "page" : undefined}
                >
                  <span
                    className={
                      active === item.href
                        ? theme === "dark"
                          ? "text-white"
                          : "text-gray-900"
                        : theme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  >
                    {item.label}
                  </span>
                  <FiChevronRight className="opacity-60" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
