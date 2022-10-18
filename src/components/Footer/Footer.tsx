import React from "react";

import classes from "./Footer.module.scss";

export const Footer: React.FC = () => (
  <footer className={classes["footer"]}>
    <p className={classes["footer__container"]}>
      Тестовое задание "Календарь". Используемые технологие: JS, Typescript,
      React, React hooks, Storybook
    </p>
  </footer>
);
