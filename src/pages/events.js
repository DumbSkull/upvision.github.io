import React from "react"
import EventCard from "../components/eventCard"
import "../css/events.css"
import data from "../../data/calendarData.json"

function Events(props) {
  const events = data
  console.log("events: ", events)

  return (
    <div className="body-container">
      <br />
      <br />
      <div className="header">Events</div>
      <div className="hero-section">
        <div className="card-grid">
          {events.length !== 0 ? (
            events.map((event, index) => (
              <EventCard
                key={index}
                title={event.summary}
                description={event.description}
                startDate={event.start.date}
                endDate={event.end.date}
                attachments={event.attachments}
                link={event.htmlLink}
              />
            ))
          ) : (
            <div className="about_container">
              <div className="about_wrapper center">
                <div className="about_content">
                  <p>No events scheduled.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events
