"use client";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Contact1 from "@/components/sections/contact/Contact1";
import Hero from "@/components/sections/heros/Hero";
import Portfolio1 from "@/components/sections/portfolio/Portfolio1";
import Resume1 from "@/components/sections/resume/Resume1";
import Services1 from "@/components/sections/services/Services1";
import Skills1 from "@/components/sections/skills/Skills1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import Integrations from "@/components/sections/integrations/Integration";
import Partners from "@/components/sections/partners/Partners";
import Capabilities from "@/components/sections/capabilities/Capabilities";
import MagorSuccess from "@/components/sections/major-success/MagorSuccess";
import { usePortfolioRenderContext } from "@/context_api/PortfolioRenderContext";

const IndexMain = () => {
  const isPortfolio = usePortfolioRenderContext();
  return (
    <main>
      <Hero />
      <Partners />
      <Integrations />
      <Capabilities />
      <MagorSuccess />
      {/* <Services1 />
      <Portfolio1 />
      <Resume1 />
      <Skills1 />
      <Testimonials1 />
      <Blogs1 />
      <Contact1 /> */}
    </main>
  );
};

export default IndexMain;
