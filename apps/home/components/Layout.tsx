import { GetNavigationQuery } from "@binoy14/cms-types";
import { Navigation } from "@binoy14/ui";
import React from "react";

export interface LayoutProps {
  navData: GetNavigationQuery["allNavigation"][0];
}

export const Layout: React.FC<LayoutProps> = ({ navData, children }) => {
  return (
    <>
      <Navigation title={navData.title} links={navData.links} />
      {children}
    </>
  );
};
