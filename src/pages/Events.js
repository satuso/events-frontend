import React from "react"
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"

const Events = ({ events, convertId, setFilter, message, loading }) => {
  const tags = ["näyttely", "konsertti", "kirjallisuus", "musiikki", "urheilu", "liikunta", "teatteri"]
  return (
    <div>
      <Filter 
        setFilter={setFilter}
        tags={tags}
        message={message}
        loading={loading}
      />
      {events.map((event, index) =>
        <Link to={`/events/${convertId(event.id)}`} key={index}>
          <EventCard event={event}/>
        </Link>
      )}
    </div>
  )
}
export default Events