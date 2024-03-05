import './../pages_css/events.css';
import Container from "@mui/material/Container"; 

function Events() {
  return (
    <Container className="events-container">
      <div className="events-json">
        <h1>"Events": &#123;</h1>
        <h1 className="event">"Event 1": &#91;</h1>
        <h1 className="event-info">Date,</h1>
        <h1 className="event-info">Time,</h1>
        <h1 className="event-info">"Info",</h1>
        <h1 className="event">&#93;</h1>
        <h1>&#125;</h1>
      </div>
    </Container>
  );
}

export default Events;