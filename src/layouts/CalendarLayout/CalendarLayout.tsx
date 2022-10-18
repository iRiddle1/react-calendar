import React from "react";

import EventForm from "../../containers/EventForm";
import CalendarForm from "../../containers/CalendarForm";

import { useEvents } from "../../hooks/useEvents";
import { useAddEvent } from "../../hooks/useAddEvent";

import classes from "./CalendarLayout.module.scss";

export const CalendarLayout = () => {
  const { events, handleSetEvents, handleRemoveEvent } = useEvents();
  const {
    date,
    name,
    description,
    priority,
    handleSetName,
    handleSetDescription,
    handleSetPriority,
    handleSetDate,
    addEvent,
  } = useAddEvent(handleSetEvents);

  return (
    <div className={classes["calendar-layout"]}>
      <div className={classes["calendar-layout__container"]}>
        <CalendarForm
          events={events}
          className={classes["calendar-layout__calendar"]}
          handleRemoveEvent={handleRemoveEvent}
          handleSetDate={handleSetDate}
        />
        <EventForm
          date={date}
          name={name}
          description={description}
          priority={priority}
          handleSetName={handleSetName}
          handleSetDescription={handleSetDescription}
          handleSetPriority={handleSetPriority}
          handleSetDate={handleSetDate}
          addEvent={addEvent}
          className={classes["calendar-layout__event-form"]}
        />
      </div>
    </div>
  );
};
