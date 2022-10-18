import React from "react";

import { H1 } from "../Head";

import classes from "./Header.module.scss";

export const Header: React.FC = () => (
  <header className={classes["header"]}>
    <div className={classes["header__container"]}>
      <H1 title="Календарь" />
    </div>
  </header>
);
