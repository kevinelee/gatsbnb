import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Background from "../components/Home Page/Background";
import ExperienceTheWorld from "../components/Home Page/ExperienceTheWorld";
import JoinMillions from "../components/Home Page/JoinMillions";
import LiveAnywhere from "../components/Home Page/LiveAnywhere";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `gatsby`,
          `tailwind`,
          `react`,
          `tailwindcss`,
          `airbnb clone`,
        ]}
        title="Home"
      />
      <Background />
      <LiveAnywhere />
      <ExperienceTheWorld />
      <JoinMillions />
    </Layout>
  );
}

export default IndexPage;
