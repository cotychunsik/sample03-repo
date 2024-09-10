import Cards from "@/app/components/Cards";
import Feature01 from "./Feature01";
import Feature02 from "./Feature02";
import Feature03 from "./Feature03";
import Feature04 from "./Feature04";

// src/app/page/FeaturesSection
const FeaturesSection = () => {
  return (
    <section className="Container bg-white pt-12 sm:pt-5">
      <Feature01/>
      <Feature02/>
      <Feature03/>
      <Feature04/>
         <Cards/>

    </section>
  );
};

export default FeaturesSection;
