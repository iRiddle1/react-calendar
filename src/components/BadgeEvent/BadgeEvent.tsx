import React, { useState, useEffect } from "react";
import cn from "classnames";

import { getSlicedString } from "../../common";

import classes from "./BadgeEvent.module.scss";

export interface IBadgeEventProps {
  name: string;
  priority: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BadgeEvent: React.FC<IBadgeEventProps> = ({
  name,
  priority,
  onClick,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <button
      title={name}
      className={cn(
        classes["badge-event"],
        classes[`badge-event--${priority}`]
      )}
      onClick={onClick}
    >
      {width > 768 && getSlicedString(name, 16)}
    </button>
  );
};
