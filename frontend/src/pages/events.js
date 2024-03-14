import './../pages_css/events.css';
import React from 'react';
import { eventData } from './eventDataList.js';

function Events() {
  return (
    <div className="events-container">
      <h1>"Events" : &#123;</h1>
      {eventData.map((event) => (
        <div className="events-json">
          <h1 className="event">"Event Name" : &#91;</h1>
          <h1 className="event-info">"date" : "{event.date}",</h1>
          <h1 className="event-info">"time" : "{event.time}",</h1>
          <h1 className="event-info">"info" : "{event.info}",</h1>
          <h1 className="event">&#93;,</h1>
        </div>
      ))}
      <h1>&#125;</h1>
    </div>
  );
}

export default Events;