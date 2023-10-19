import { Container } from "react-bootstrap";

const Body = () => {
  return (
    <div className="mb-3 mt-5">
      <Container className="text-center" fluid="lg">
        <h2
          id="title-home"
          className="mb-4 text-center font-fraunces"
          style={{ color: "white", fontSize: "60px" }}
        >
          Il social bar nel cuore di <br /> Ravanusella
        </h2>

        <h4
          className="text-start mb-5 font-lato"
          style={{ color: "#164194", lineHeight: "35px" }}
        >
          Il nostro social bar, situato nel cuore di Piazza Ravanusella, è molto
          più di un semplice locale. È il fulcro di un ambizioso progetto di
          riqualificazione che mira a ridare vita e vigore a questa storica
          piazza nel quartiere, che nel corso degli anni è diventato marginale
          ma che un tempo era il cuore pulsante della città, celebre per essere
          il luogo del mercato con le sue immagini iconiche di cesti di
          pomodoro. <br />
          Chiamiamo il nostro progetto "Scaro" in onore delle radici storiche di
          questa piazza, unendo il nome storico con l'obiettivo di scuotere il
          quartiere e farlo rivivere. Ma Scaro è molto più di un semplice bar; è
          un'idea, una missione di riqualificazione e inclusione. <br />
          Oggi, il quartiere è abitato principalmente dalla comunità senegalese,
          e ciò conferisce un importante tema di inclusione al nostro progetto.
          Desideriamo creare un luogo accogliente, aperto e inclusivo dove le
          diverse culture e le storie di chi vive qui possano confluire e
          coesistere in armonia. Il nostro obiettivo è promuovere la diversità,
          l'integrazione e la condivisione attraverso la cultura, la musica,
          l'arte e la buona cucina. <br />
          Nel nostro social bar, troverai un'ampia varietà di eventi culturali,
          spettacoli dal vivo, mostre d'arte e iniziative comunitarie. Offriremo
          anche un menù che celebra la cucina tradizionale senegalese e
          italiana, creando un punto d'incontro per le persone di tutte le età e
          provenienze. Il nostro spazio sarà un luogo di conversazione, di
          connessione e di condivisione, dove le storie individuali si
          intrecciano per creare una comunità più forte e inclusiva. <br />{" "}
          Speriamo che il nostro social bar possa essere un faro di speranza e
          di rinascita per Piazza Ravanusella e il quartiere circostante, un
          luogo in cui la cultura e l'umanità si incontrano, si abbracciano e
          prosperano insieme.
        </h4>
      </Container>
    </div>
  );
};

export default Body;
