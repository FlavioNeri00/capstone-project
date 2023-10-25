import { useEffect, useState } from "react";
import SingleEventMaket from "./SingleEventMaket";
import { collection, getDocs } from "firebase/firestore";
import { db } from "..";
import { Container, Row } from "react-bootstrap";
import SingleSpecialEventMaket from "./SingleSpecialEventMaket";

const MarketEvents = () => {
  const [eventsMarket, setEventsMarket] = useState([]);
  const [specialEventsMarket, setSpecialEventsMarket] = useState([]);

  async function EventsAction() {
    let eventList = [];
    const event = collection(db, "Events");
    const eventDoc = await getDocs(event);
    console.log("yyo", eventDoc);

    eventList.push(
      ...eventDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    console.log("au", eventList);

    setEventsMarket(eventList);
    console.log("yo", eventsMarket);
  }
  useEffect(() => {
    EventsAction();
  }, []);
  async function specialEventsAction() {
    let specialEventList = [];
    const specialEvent = collection(db, "SpecialEvents");
    const specialEventDoc = await getDocs(specialEvent);
    console.log("yyo", specialEventDoc);

    specialEventList.push(
      ...specialEventDoc.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }))
    );

    console.log("au", specialEventList);

    setSpecialEventsMarket(specialEventList);
    console.log("yo", specialEventsMarket);
  }

  useEffect(() => {
    specialEventsAction();
  }, []);

  return (
    <>
      <Container>
        <h2
          className="display-1 font-fraunces text-center mb-4 mt-3"
          style={{ color: "#164194" }}
        >
          I nostri eventi
        </h2>
        <h2 className="font-fraunces mt-3" style={{ color: "#F4E7DB" }}>
          I nostri appuntamenti fissi:
        </h2>
        <div className="mt-3 mb-3 ">
          <Row className="gx-3">
            {eventsMarket.map((event) => (
              <SingleEventMaket key={event.ID} event={event} />
            ))}
          </Row>
        </div>
        <h2 className="font-fraunces" style={{ color: "#F4E7DB" }}>
          Appuntamenti speciali:
        </h2>
        <div className="mt-3 mb-3 ">
          <Row>
            {specialEventsMarket.map((specialEvent) => (
              <SingleSpecialEventMaket
                key={specialEvent.ID}
                specialEvent={specialEvent}
              />
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default MarketEvents;
