import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import React, {type ReactNode} from 'react';

const bgColors = ["#a0b4fb", "#6ed56e", "yellow", "#ff9797"];



export default function RainbowText({
  texts,
}: {
  texts: {content: string, bgColor?: string}[];
}): JSX.Element {
  return (
    <span>
      {texts.map((text, idx) => (
        <span style={{ backgroundColor: text.bgColor ?? bgColors[idx] }}>
          {text.content}
        </span>
      ))}
    </span>
  );
}
