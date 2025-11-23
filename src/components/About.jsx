import Image from "next/image";

const About = ({
  firstheading = "About Us",
  secondheading = "Our Vision",
}) => {
  return (
    <section id="about" className="section-padding">
      {/* Top section */}
      <div className="container-custom grid lg:grid-cols-2 gap-10 mb-20 pb-8 lg:pb-20 items-center">
        {/* Left content panel */}
        <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
          <h1 className="text-3xl font-semibold lg:text-6xl">{firstheading}</h1>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight ux-text-primary text-balance">
            We are RevGroups, a futuristic AI company that is committed to
            designing intelligent solutions that enhance people&apos;s lives
            by making them easier, smarter, and more fun.
          </h2>

          <div className="mt-10 ux-surface px-8 py-6 rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 max-w-3xl mx-auto">
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
              {[
                "Building systems that expand according to the business.",
                "Fast converting thoughts into practical AI applications.",
                "Making raw data into useful tactics.",
                "Installing AI that develops alongside innovation.",
              ].map((item, i) => (
                                <li key={i} className="flex items-start">
  <span className="text-lg mt-1 text-purple-500">•</span>
  <span className="ml-2 text-base font-medium ux-text-secondary">
    {item}
  </span>
</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right visual panel */}
        <div className="relative order-1 lg:order-2 h-full flex items-center">
          <div className="rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden w-full">
            <Image
              src="/gradient4.png"
              alt="About visual"
              width={800}
              height={1000}
              className="h-full w-full object-cover aspect-4/5"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
        {/* Left visual panel */}
        <div className="relative h-full flex items-center">
          <div className="rounded-3xl ring-1 ring-gray-200/60 dark:ring-white/10 overflow-hidden">
            <Image
              src="/gradient5.png"
              alt="Our Vision"
              width={800}
              height={1000}
              className="h-full w-full object-cover aspect-4/5"
              priority
            />
          </div>
        </div>

        {/* Right content aligned to image */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl font-semibold lg:text-6xl">{secondheading}</h1>
          <h2 className="mt-5 text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight ux-text-primary text-balance">
            Empowering individuals through intelligent devices that are capable
            of learning, adapting, and growing, thus making a world where AI is
            the main factor in creative, productive, and convenient lifestyles
            in every household.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
