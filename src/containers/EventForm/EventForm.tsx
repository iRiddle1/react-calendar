import React from "react";
import cn from "classnames";
import { DatePicker } from "antd";
import type { Moment } from "moment";

import { Input, TextArea } from "../../components/Input";
import Button from "../../components/Button";
import { H2 } from "../../components/Head";
import PriorityCircle from "../../components/PriorityCircle";

import { EVENT_PRIORITIES, isNotEmpty } from "../../common";

import classes from "./EventForm.module.scss";

export interface IEventFormProps {
  className?: string;
  date: Moment | null;
  name: string;
  description: string;
  priority: string;
  handleSetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSetPriority: (priority: string) => void;
  handleSetDate: (value: Moment | null, dateString: string) => void;
  addEvent: () => void;
}

export const EventForm: React.FC<IEventFormProps> = ({
  name,
  date,
  className,
  description,
  priority,
  handleSetName,
  handleSetDescription,
  handleSetPriority,
  handleSetDate,
  addEvent,
}) => {
  return (
    <div className={cn(classes["event-form"], className)}>
      <div className={classes["event-form__container"]}>
        <H2 title="Добавить событие" gap="md" />
        <DatePicker
          value={date}
          className={classes["event-form__date-picker"]}
          onChange={handleSetDate}
          placeholder="ДД.ММ.ГГГГ"
        />
        <Input
          value={name}
          onChange={handleSetName}
          placeholder="Укажите краткое название"
          gap="sm"
        />
        <TextArea
          value={description}
          onChange={handleSetDescription}
          placeholder="Введите описание"
          gap="md"
        />
        <div className={classes["priorities-block"]}>
          {EVENT_PRIORITIES.map(({ title, slug }) => (
            <PriorityCircle
              key={slug}
              title={title}
              slug={slug}
              className={classes["priorities-block__priority"]}
              isActive={priority === slug}
              onClick={handleSetPriority}
            />
          ))}
        </div>
        <Button
          value="Добавить"
          onClick={addEvent}
          disabled={!isNotEmpty([date, name, description])}
        />
      </div>
    </div>
  );
};
