import { useState } from "react";

import { useToast } from "./useToast";

import { ICreatedEvent, IMockEvents, IMockEvent } from "../common/types";
import { MOCK_EVENTS } from "../common";

export const useEvents = () => {
  const [events, setEvents] = useState<IMockEvents>(MOCK_EVENTS);
  const { notify } = useToast();

  const handleSetEvents = (event: ICreatedEvent) => {
    const { date, type, content } = event;
    if (date) {
      if (date && events[date]) {
        setEvents({
          ...events,
          [date]: [
            { id: events[date].length + 1, type, content },
            ...events[date],
          ],
        });
        notify({ text: "Событие добавлено", type: "success" });
      } else {
        setEvents({
          ...events,
          [date]: [{ id: 1, type, content }],
        });
        notify({ text: "Событие добавлено", type: "success" });
      }
    }
  };

  const handleRemoveEvent = (date: string, eventId: number) => {
    setEvents({
      ...events,
      [date]: [
        ...events[date].filter((item: IMockEvent) => item.id !== eventId),
      ],
    });
  };

  return { events, handleSetEvents, handleRemoveEvent };
};
