import { classnames, TTailwindString } from "tailwindcss-classnames";
import { BasePropsPropsWithChildren } from "../types";

export interface SectionProps extends BasePropsPropsWithChildren {
  type: "dark" | "light";
}

export function Section({ children, type, classNames = "" as TTailwindString }: SectionProps) {
  const styles = classnames(
    "p-6",
    {
      "text-white": type === "dark",
      "bg-black": type === "dark",
      "bg-white": type === "light",
      "text-black": type === "light",
    },
    classNames
  );

  return <div className={styles}>{children}</div>;
}

export default Section;
