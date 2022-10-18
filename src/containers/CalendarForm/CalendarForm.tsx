import React, { useState } from "react";
import { Calendar } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import cn from "classnames";

import "moment/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";

import BadgeEvent from "../../components/BadgeEvent";

import { IMockEvents } from "../../common/types";

import { ReactComponent as Arrow } from "../../static/icons/arrow.svg";

import classes from "./CalendarForm.module.scss";

export interface ICalendarFormProps {
  className?: string;
  events: IMockEvents;
  handleRemoveEvent: THandleRemoveEvent;
  handleSetDate: (value: Moment | null, dateString: string) => void;
}

export type THandleRemoveEvent = (date: any, eventId: number) => void;

const getListData = (value: Moment, events: IMockEvents) => {
  const calendarDate = value && value.format("yyyy-MM-DD");
  const listEventsData = events[calendarDate as keyof typeof events];
  return listEventsData || [];
};

const dateCellRender = (
  value: Moment,
  events: IMockEvents,
  handleRemoveEvent: THandleRemoveEvent
) => {
  const listData = getListData(value, events);
  return (
    <div className={classes["calendar__badge-container"]}>
      {listData.map(({ id, type, content }) => (
        <BadgeEvent
          key={id}
          name={content}
          priority={type}
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveEvent(value.format("yyyy-MM-DD"), id);
          }}
        />
      ))}
    </div>
  );
};

const dateFullCellRender = (
  value: Moment,
  events: IMockEvents,
  handleRemoveEvent: THandleRemoveEvent
) => {
  const isWeekend = value.day() === 0 || value.day() === 6;
  const isSame = value.isSame(new Date(), "day");

  return (
    <div className={classes["date-full-cell"]}>
      <div className={classes["date-full-cell__container"]}>
        <span
          className={cn(
            classes["date-full-cell__number"],
            isWeekend && classes["date-full-cell__number--weekend"],
            isSame && classes["date-full-cell__number--same"]
          )}
        >
          {value.date()}
        </span>
        {dateCellRender(value, events, handleRemoveEvent)}
      </div>
    </div>
  );
};

const calendarHeaderRender = (
  value: Moment,
  handleSetCalendarValue: (v: Moment) => void
) => {
  const handleSetMonth = (day: number) => {
    var fm = moment(value).add(day, "M");
    var fmEnd = moment(fm).endOf("month");
    handleSetCalendarValue(
      value.date() !== fm.date() && fm.isSame(fmEnd.format("YYYY-MM-DD"))
        ? fm.add(1, "d")
        : fm
    );
  };

  return (
    <div className={classes["calendar__header"]}>
      <button
        className={cn(
          classes["calendar__header-btn"],
          classes["calendar__header-btn--back"]
        )}
        onClick={() => handleSetMonth(-1)}
      >
        <Arrow />
      </button>
      <span className={classes["calendar__header-month"]}>
        {`${value.format("MMMM")} ${value.year()}`}
      </span>
      <button
        className={classes["calendar__header-btn"]}
        onClick={() => handleSetMonth(1)}
      >
        <Arrow />
      </button>
    </div>
  );
};

export const CalendarForm: React.FC<ICalendarFormProps> = ({
  className,
  events,
  handleRemoveEvent,
  handleSetDate,
}) => {
  const [calendarValue, setCalendarValue] = useState<Moment>(moment());

  const handleSetCalendarValue = (value: Moment) => {
    setCalendarValue(value);
  };

  const handleSelectDate = (value: Moment, dateString: string) => {
    handleSetDate(value, dateString);
  };

  const onPanelChange = (value: Moment) => {
    setCalendarValue(value);
  };

  return (
    <Calendar
      value={calendarValue}
      headerRender={() =>
        calendarHeaderRender(calendarValue, handleSetCalendarValue)
      }
      className={className}
      dateFullCellRender={(value) =>
        dateFullCellRender(value, events, handleRemoveEvent)
      }
      locale={locale}
      onChange={(e) => handleSelectDate(e, calendarValue.format("yyyy-MM-DD"))}
      onPanelChange={onPanelChange}
    />
  );
};
