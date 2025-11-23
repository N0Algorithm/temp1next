import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import  OurTeam from "@/components/OurTeam";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <OurTeam/>
      {/* Inline Contact section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-4">
            <h2 className="text-2xl font-semibold md:text-4xl">Contact Us</h2>
            <p className="text-muted-foreground">
              Questions or feedback? Get in touch. As this section becomes centered, the Contact
              link should become active.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
