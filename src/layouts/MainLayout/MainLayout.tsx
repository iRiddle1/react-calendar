import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import classes from "./MainLayout.module.scss";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className={classes["main-layout"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
