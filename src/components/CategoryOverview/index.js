import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

function File({ Svg, title, date }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{date}</p>
      </div>
    </>
  );
}

export default function CategoryOverview({ data }) {
  const { title, content, files } = data;
  const { title: contentTitle, Svg, date: contentDate } = content;
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">{title}</div>
        <div className="row">
          <div className={clsx("col col--8")}>
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{contentTitle}</Heading>
              <p>{contentDate}</p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            {files.map((props, idx) => (
              <File key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
