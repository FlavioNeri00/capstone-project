import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import { Container } from "react-bootstrap";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 11, 5),
    end: new Date(2023, 11, 5),
  },
  {
    title: "Vacation",
    allDay: true,
    start: new Date(2023, 11, 5),
    end: new Date(2023, 11, 8),
  },
];

const MarketCalendar = () => {
  return (
    <div className="px-1">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          backgroundColor: "white",
          height: "700px",
          borderRadius: "5px",
        }}
      />
      ;
    </div>
  );
};
export default MarketCalendar;
