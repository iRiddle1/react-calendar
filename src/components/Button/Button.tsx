import React from "react";
import cn from "classnames";

import classes from "./Button.module.scss";

export interface IButtonProps {
  value: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  value,
  disabled,
  onClick,
  ...rest
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(classes["button"], disabled && classes["button--disabled"])}
    disabled={disabled}
    {...rest}
  >
    {value}
  </button>
);
