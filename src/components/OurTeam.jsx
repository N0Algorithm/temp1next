"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const teamMembers = [
  { image: "/vm.png", quote: "Driving tomorrow’s intelligence, today.", name: "Vraj Maitrak, Founder", company: "Rev Groups" },
  { image: "/rp.png", quote: "Redefining what’s possible with the power of AI.", name: "Rushabh Patel, Founder", company: "Rev Groups" },
  { image: "/ak.png", quote: "Timing is KEYYYYYYY", name: "Akshay Rawat, Lead Engineer", company: "Rev Groups" },
];

export default function OurTeam() {
  // Lazy initializer reads theme only once on initial render
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      setTheme(html.classList.contains("dark") ? "dark" : "light");
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className={`text-3xl font-semibold lg:text-5xl transition-colors duration-300 ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
            Our Team
          </h2>
          <p className={`text-muted-foreground text-balance lg:text-lg transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}></p>
        </div>

        {/* Team Cards */}
        <div className="w-full grid gap-10 md:grid-cols-3">
          {teamMembers.map((t, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden flex flex-col transform transition-colors duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === "dark"
                  ? "bg-gradient-to-b from-[#1b1b27] to-[#111117] text-gray-100 shadow-md shadow-black/30"
                  : "bg-transparent text-gray-900 shadow-md hover:shadow-xl"
                }`}
            >
              <div className="relative h-80 w-full">
                <Image src={t.image} alt={t.name} fill className="object-contain" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className={`text-xl font-medium mb-6 leading-relaxed transition-colors duration-300 ${theme === "dark" ? "text-gray-200" : "text-gray-900"}`}>
                  “{t.quote}”
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className={`text-sm transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{t.company}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
