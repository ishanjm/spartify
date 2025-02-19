import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Hero from "@/components/sections/prices/Hero";
import Plans from "@/components/sections/prices/Plans";
import Companies from "@/components/sections/prices/Companies";
import PriceGrid from "@/components/sections/prices/PriceGrid";
import FAQ from "@/components/sections/prices/FAQ";

const Prices = () => {
  return (
    <PageWrapper isInnerPage={true}>
      <Hero />
      <Plans />
      <Companies />
      <PriceGrid />
      <FAQ />
    </PageWrapper>
  );
};
export default Prices;
