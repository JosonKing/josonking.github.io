import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CategoryOverview from "@site/src/components/CategoryOverview";
import Translate from "@docusaurus/Translate";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/about">
            <Translate id="index.aboutMe">About Me</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

const categoryData = {
  title: "AI",
  content: {
    title: "Eveny one",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    data: "1/20/2023",
  },
  files: [
    {
      title: "Easy to Use",
      Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
      date: "Docusaurus",
    },
    {
      title: "Focus on What Matters",
      Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
      date: "Docusaurus",
    },
    {
      title: "Powered by React",
      Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
      date: "Docusaurus",
    },
  ],
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Web dev tech">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}\
        <CategoryOverview data={categoryData} />
      </main>
    </Layout>
  );
}
