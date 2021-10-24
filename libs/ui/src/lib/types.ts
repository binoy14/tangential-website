import { ReactNode } from "react";
import { TTailwindString } from "tailwindcss-classnames";

export interface BaseProps {
  classNames?: TTailwindString;
}

export interface BasePropsPropsWithChildren extends BaseProps {
  children: ReactNode;
}
