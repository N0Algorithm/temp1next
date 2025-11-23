"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scrollReveal, staggerContainer } from "@/utils/animations";

const members = [
  {
    name: "AI Strategy & Consulting",
    blurb:
      "Align AI capabilities with business goals.",
    img: "/gradient1.jpg",
    grad: null,
  },
  {
    name: "AI-Driven Decision Support",
    blurb:"Drive smarter decisions with data.",
    img: "/gradient2.jpg",
    grad: null,
  },
  {
    name: "Model Deployment",
    blurb:
      "Ensure your AI systems run efficiently and at scale.",
    img: "/gradient3.jpg",
    grad: null,
  },
];

const features = [
  {
    icon: "🧠",
    title: "Smart & Adaptive AI",
    description:
      "Our products learn from your habits and preferences, adapting to your needs to make everyday tasks effortless.",
    color: "from-primary to-secondary",
  },
  {
    icon: "⏱️",
    title: "Time-Saving Automation",
    description:
      "From reminders to task management, our AI handles routine tasks so you can focus on what truly matters.",
    color: "from-accent-cyan to-accent-green",
  },
  {
    icon: "🎨",
    title: "User-Friendly Design",
    description:
      "Intuitive interfaces and seamless experiences mean you can start using our tools immediately—no tech expertise required.",
    color: "from-accent-pink to-accent-yellow",
  },
  {
    icon: "🔒",
    title: "Privacy & Security First",
    description:
      "We protect your data with cutting-edge security and privacy measures, giving you peace of mind.",
    color: "from-secondary to-primary",
  },
  {
    icon: "📱",
    title: "Multi-Device Compatibility",
    description:
      "Access your AI tools anytime, anywhere—on your phone, tablet, or computer.",
    color: "from-accent-green to-accent-cyan",
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    description:
      "Our AI evolves with you, constantly learning and updating to provide smarter, more personalized assistance over time.",
    color: "from-accent-yellow to-accent-pink",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding">
      <div className="container-custom ux-surface rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 p-6 md:p-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm md:text-base tracking-wider uppercase ux-text-secondary ring-1 ring-gray-200/60 dark:ring-white/10">
            Products
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight ux-text-primary">
            AI assistants working alongside you to grow{" "}
            <span className="text-gradient-primary">business</span>.
          </h2>
        </div>

        {/* Product Cards */}
        
<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-10">
  {members.map((m) => (
    <div
      key={m.name}
      className="product-card rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 p-6 flex flex-col bg-[#E2E4E8] dark:bg-(--bg-surface)"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold ux-text-primary">{m.name}</div>
          <div className="text-xs mt-1 ux-text-secondary">{m.role}</div>
        </div>
      </div>

      <p className="mt-4 text-sm ux-text-secondary">{m.blurb}</p>

      {/* Larger Image at the bottom */}
      <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-gray-200/60 dark:ring-white/10 h-72 md:h-80 lg:h-96">
        {m.img ? (
          <Image
            src={m.img}
            alt={m.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`h-full w-full bg-linear-to-br ${
              m.grad || "from-indigo-500 to-purple-500"
            }`}
          />
        )}
      </div>
    </div>
  ))}
</div>

{/* Features Section */}
<section
  id="features"
  className="pt-10 pb-0 transition-colors duration-700 ux-muted"
>
  <motion.div
    className="container-custom ux-surface rounded-3xl p-6 md:p-10"
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    {/* Features Heading */}
    <motion.div
      variants={scrollReveal}
      className="text-center max-w-5xl mx-auto mb-12"
    >
      <h1 className="text-3xl font-semibold lg:text-6xl ux-text-primary mb-6">
        Features
      </h1>
      <p className="text-muted-foreground ux-text-secondary text-balance lg:text-lg">
        Powerful features designed to help you work smarter, not harder.
      </p>
    </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={scrollReveal}
                  className="card card-hover group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
                >
                  <div
                    aria-hidden="true"
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold ux-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="ux-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
