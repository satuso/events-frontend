import React from "react"
import GoBack from "../components/GoBack"

const Activity = ({ activity }) => {
  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric" }
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options)
    return convertedDate
  }
  return (
    <div className="page">
      <GoBack />
      <h2><i className="fas fa-thumbtack"></i> {activity.descriptions.fi ? activity.descriptions.fi.name : activity.descriptions.en.name}</h2>
      <p><i className="fas fa-map-marker-alt"></i> {activity.address.streetName} {activity.address.postalCode} {activity.address.city}</p>
      <div className="images">
        {activity.media.map(image => 
          <div key={image.id}>
            <img 
              src={image.largeUrl}
              alt={image.alt}
              key={image.largeUrl}
              className="large-img"
            />
            <figcaption>
              {image.copyright}
            </figcaption>
          </div>
        )}
      </div>
      <p>{activity.priceEUR?.from} {!activity.priceEUR?.to === 0 &&` - ${activity.priceEUR?.to}`} {activity.priceEUR && "EUR /"} {activity.duration && `${activity.duration} ${activity.durationType}`}</p>
      {activity.meantFor.map(tag => <span className="meant-for" key={tag}>{tag}</span>)}
      <p>{activity.descriptions.fi ? activity.descriptions.fi.description : activity.descriptions.en.description}</p>
      <span className="updated">Päivitetty: {convertDate(activity.updated)}</span>
      <p><i className="fas fa-link"></i> <a href={activity.siteUrl} target="blank">{activity.company.name}</a></p>
      <p><i className="fas fa-envelope"></i> {activity.company.email}</p>
      <p><i className="fas fa-phone-volume"></i> {activity.company.phone}</p>
      {activity.company.businessId && <p>{`Y-tunnus: ${activity.company.businessId}`}</p>} 
      <GoBack />
    </div>
  )
}
export default Activity