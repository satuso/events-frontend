import React from "react"
import Dates from "../components/Dates"
import GoBack from "../components/GoBack"

const Event = ({ event }) => {
  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric" }
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options)
    return convertedDate
  }
  return (
    <div className="page">
      <GoBack />
      <h2><i className="fas fa-thumbtack"></i> {event.name.fi}</h2>
      <Dates event={event}/>
      <p><i className="fas fa-map-marker-alt"></i> {event.location.address.street_address} {event.location.address.postal_code} {event.location.address.locality}</p>
      <div className="images">
        {event.description.images && event.description.images.map(image =>
          <div key={image.media_id}>
            <img 
              src={image.url}
              alt={event.name.fi}
              className="large-img"
            />
            <figcaption>
              {image.copyright_holder}
            </figcaption>
          </div>
        )}
      </div>
      <span dangerouslySetInnerHTML={{__html: event.description.body}}></span>
      <span className="updated">Päivitetty: {convertDate(event.modified_at)}</span>
      {event.info_url && <p><i className="fas fa-link"></i> <a href={event.info_url} target="blank">{event.name.fi}</a></p>}
      <GoBack />
    </div>
  )
}
export default Event