import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import { Button, Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

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
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvents = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="px-1 mt-3">
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{
          backgroundColor: "white",

          height: "700px",
          borderRadius: "5px",
        }}
      />
      <h2>Add New Event</h2>
      <div style={{ marginBottom: "15rem" }}>
        <input
          required
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          required
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          required
          placeholderText="End Date"
          style={{ marginRight: "15px" }}
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <Button style={{ marginLeft: "10px" }} onClick={handleAddEvents}>
          Aggiungi evento
        </Button>
      </div>
      ;
    </div>
  );
};
export default MarketCalendar;
