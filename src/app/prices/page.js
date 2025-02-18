import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Hero from "@/components/sections/prices/Hero";
import Plans from "@/components/sections/prices/Plans";
import Companies from "@/components/sections/prices/Companies";

const Prices = () => {
  return (
    <PageWrapper isInnerPage={true}>
      <Hero />
      <Plans />
      <Companies />
    </PageWrapper>
  );
};
export default Prices;
