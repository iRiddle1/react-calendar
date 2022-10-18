import React from "react";
import cn from "classnames";

import classes from "./PriorityCircle.module.scss";

export interface IPriorityCircleProps {
  title: string;
  slug: string;
  className?: string;
  isActive: boolean;
  onClick: (slug: string) => void;
}

export const PriorityCircle: React.FC<IPriorityCircleProps> = ({
  title,
  slug,
  isActive,
  className,
  onClick,
}) => (
  <button
    title={title}
    className={cn(
      classes["priority-circle"],
      classes[`priority-circle--${slug}`],
      isActive && classes[`priority-circle--active`],
      className
    )}
    onClick={() => onClick(slug)}
  />
);
