import React from "react";
import cn from "classnames";

import classes from "./Head.module.scss";

export interface IHeadProps {
  title: string;
  gap?: string;
}

export const H1: React.FC<IHeadProps> = ({ title, gap }) => (
  <h1 className={cn(classes["h1"], classes[`h1--gap-${gap}`])}>{title}</h1>
);

export const H2: React.FC<IHeadProps> = ({ title, gap }) => (
  <h2 className={cn(classes["h1"], classes[`h1--gap-${gap}`])}>{title}</h2>
);
