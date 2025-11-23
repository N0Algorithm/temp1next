'use client';

import { motion } from 'framer-motion';
import { scrollReveal, staggerContainer } from '@/utils/animations';

const features = [
  {
    icon: '🧠',
    title: 'Smart & Adaptive AI',
    description:
      'Our products learn from your habits and preferences, adapting to your needs to make everyday tasks effortless.',
    color: 'from-primary to-secondary',
  },
  {
    icon: '⏱️',
    title: 'Time-Saving Automation',
    description:
      'From reminders to task management, our AI handles routine tasks so you can focus on what truly matters.',
    color: 'from-accent-cyan to-accent-green',
  },
  {
    icon: '🎨',
    title: 'User-Friendly Design',
    description:
      'Intuitive interfaces and seamless experiences mean you can start using our tools immediately—no tech expertise required.',
    color: 'from-accent-pink to-accent-yellow',
  },
  {
    icon: '🔒',
    title: 'Privacy & Security First',
    description:
      'We protect your data with cutting-edge security and privacy measures, giving you peace of mind.',
    color: 'from-secondary to-primary',
  },
  {
    icon: '📱',
    title: 'Multi-Device Compatibility',
    description:
      'Access your AI tools anytime, anywhere—on your phone, tablet, or computer.',
    color: 'from-accent-green to-accent-cyan',
  },
  {
    icon: '🔄',
    title: 'Continuous Improvement',
    description:
      'Our AI evolves with you, constantly learning and updating to provide smarter, more personalized assistance over time.',
    color: 'from-accent-yellow to-accent-pink',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding transition-colors duration-700 ux-muted"
    >
      <motion.div
        className="container-custom ux-surface rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 p-6 md:p-10"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Hero-style Heading */}
        <motion.div
          variants={scrollReveal}
          className="text-center max-w-5xl mx-auto mb-16"
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scrollReveal}
              className="card card-hover group transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform` }
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
  );
}
