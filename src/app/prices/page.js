import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import Hero from "@/components/sections/prices/Hero";
import Plans from "@/components/sections/prices/Plans";

const Prices = () => {
  return (
    <PageWrapper isInnerPage={true}>
      <Hero />
      <Plans />
    </PageWrapper>
  );
};
export default Prices;
