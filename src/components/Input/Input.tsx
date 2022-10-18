import React from "react";
import cn from "classnames";

import { ICommonInputProps, IInputProps, ITextAreaProps } from "./types";

import classes from "./Input.module.scss";

export const Input: React.FC<ICommonInputProps & IInputProps> = ({
  value,
  onChange,
  placeholder,
  gap,
  ...rest
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={cn(classes["input"], classes[`input--gap-${gap}`])}
    placeholder={placeholder}
    {...rest}
  />
);

export const TextArea: React.FC<ICommonInputProps & ITextAreaProps> = ({
  value,
  placeholder,
  gap,
  ...rest
}) => (
  <textarea
    value={value}
    className={cn(classes["input"], classes[`input--gap-${gap}`])}
    cols={10}
    rows={5}
    placeholder={placeholder}
    {...rest}
  ></textarea>
);
