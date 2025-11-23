import React from "react";
const Hero = ({
  heading = "AI-Powered Products Bringing Simplicity and Efficiency to Life",
  description = "With the help of our products, time saving, better organization, and more intelligent choices are done without the hassle.",
}) => {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] flex-col items-center justify-center text-center px-4 py-32"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-semibold lg:text-6xl ">
          {heading}
        </h1>
        <p className="text-muted-foreground text-balance lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
