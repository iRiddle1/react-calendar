import { useState } from "react";
import type { DatePickerProps } from "antd";
import type { Moment } from "moment";

import { ICreatedEvent } from "../common/types";
import { isNotEmpty } from "../common";

export const useAddEvent = (
  handleSetEvents: (event: ICreatedEvent) => void
) => {
  const [date, setDate] = useState<Moment | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("none");

  const handleSetDate: DatePickerProps["onChange"] = (date) => {
    setDate(date);
  };

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setName(value);
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setDescription(value);
  };

  const handleSetPriority = (priority: string) => {
    setPriority(priority);
  };

  const addEvent = () => {
    const isNotEmptyFields = isNotEmpty([date, name, description]);
    if (isNotEmptyFields) {
      const dateString = date && date.format("yyyy-MM-DD");
      handleSetEvents({
        date: dateString,
        type: priority,
        content: name,
      });
      nullifyEventFields();
    }
  };

  const nullifyEventFields = () => {
    setName("");
    setDescription("");
    setPriority("none");
  };

  return {
    date,
    name,
    description,
    priority,
    handleSetDate,
    handleSetName,
    handleSetDescription,
    handleSetPriority,
    addEvent,
  };
};
