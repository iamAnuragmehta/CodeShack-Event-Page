import React, { useState } from 'react';
import './App.css';

const eventsData = [
  {
    id: 1,
    name: 'Munich.AI Meetup',
    date: '17 Feb 2026',
    day: 'Tuesday',
    time: '10:00 pm - 5:30 pm GMT+1',
    description: 'Join us for an exciting AI meetup in Munich where we discuss the latest trends in artificial intelligence, machine learning, and deep learning. Network with industry professionals and researchers.',
    host: 'Nathan Benaich (Air Street)',
    location: 'Munich, Bavaria',
    registeredCount: 145,
    poster: 'MUNICH.AI',
  },
  {
    id: 2,
    name: 'Zurich.AI Meetup',
    date: '19 Feb 2026',
    day: 'Thursday',
    time: '10:00 pm - 5:30 pm GMT+1',
    description: 'An interactive session featuring talks from leading AI experts, hands-on workshops, and networking opportunities with fellow AI enthusiasts in Zurich.',
    host: 'Nathan Benaich (Air Street)',
    location: 'Zürich, Zürich',
    registeredCount: 98,
    poster: 'ZURICH.AI',
  },
  {
    id: 3,
    name: 'The 10th Research and Applied AI Summit (RAAIS)',
    date: '12 Jun 2026',
    day: 'Friday',
    time: '1:00 pm - 8:30 am GMT+1',
    description: 'A comprehensive summit bringing together researchers, practitioners, and industry leaders to discuss cutting-edge AI research and real-world applications. Features keynote speakers, panel discussions, and poster sessions.',
    host: 'The RAAIS Foundation',
    location: 'London, UK',
    registeredCount: 523,
    poster: 'RAAIS',
  },
  {
    id: 4,
    name: 'Berlin Tech Conference',
    date: '25 Jun 2026',
    day: 'Thursday',
    time: '9:00 am - 6:00 pm GMT+1',
    description: 'Annual technology conference covering topics in software engineering, cloud computing, DevOps, and emerging technologies. Includes workshops and networking sessions.',
    host: 'Tech Berlin Association',
    location: 'Berlin, Germany',
    registeredCount: 280,
    poster: 'BTC',
  },
];

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };

  if (selectedEvent) {
    return (
      <div className="detail-view">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
        <div className="detail-container">
          <div className="detail-left">
            <div className="poster-box">
              <div className="poster-content">{selectedEvent.poster}</div>
            </div>
            <div className="registration-info">
              <h3>Registration Details</h3>
              <p><strong>Host:</strong> {selectedEvent.host}</p>
              <p><strong>Location:</strong> {selectedEvent.location}</p>
              <p><strong>Registered:</strong> {selectedEvent.registeredCount} people</p>
            </div>
          </div>
          <div className="detail-right">
            <h1 className="event-title">{selectedEvent.name}</h1>
            <div className="event-datetime">
              <span className="event-date">{selectedEvent.date} ({selectedEvent.day})</span>
              <span className="event-time">{selectedEvent.time}</span>
            </div>
            <button className="register-button">Register Now</button>
            <div className="event-description">
              <h2>Event Description</h2>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Events</h1>
      </header>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {eventsData.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => handleEventClick(event)}
          >
            <div className="timeline-dot"></div>
            <div className="event-card">
              <div className="event-card-header">
                <span className="event-name">{event.name}</span>
                <span className="event-date-time">{event.date} • {event.time}</span>
              </div>
              <div className="event-card-body">
                <p className="event-short-desc">
                  {event.description.substring(0, 100)}...
                </p>
              </div>
              <div className="event-card-footer">
                <span className="event-host">By {event.host}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
