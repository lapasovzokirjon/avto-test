import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Teachers from "@/components/Teachers";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Results />
      <Teachers />
      <Reviews />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
