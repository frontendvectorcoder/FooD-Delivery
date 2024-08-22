import React from "react";
import Layout from "../../Layout/Layout";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";

function Home() {
  return (
    <>
      <Layout>
        <SectionOne />

        {/* SECTION TWO */}

        <SectionTwo />

        {/* SECTION THREE  */}

        <SectionThree />

        {/* SECTION FOUR  */}

        <SectionFour />

        {/* SECTION FIVE  */}

        <SectionFive />

        {/* SECTION SIX  */}

        <SectionSix />

        {/* SECTION SEVEN  */}

        <SectionSeven />
      </Layout>
    </>
  );
}

export default Home;
