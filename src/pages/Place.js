import React from "react";
import GoBack from "../components/GoBack";
import OpeningHours from "../components/OpeningHours";

const Place = ({ place }) => {
  const convertDate = (date) => {
    const options = {year: "numeric", month: "numeric", day: "numeric" };
    const convertedDate = new Date(date).toLocaleDateString("fi-FI", options);
    return convertedDate;
  };

  return (
    <div className="page">
      <GoBack />
      <h2><i className="fas fa-thumbtack"></i> {place.name.fi}</h2>
      <p><i className="fas fa-map-marker-alt"></i> {place.location.address.street_address} {place.location.address.postal_code} {place.location.address.locality}</p>
      <div className="images">
        {place.description.images && place.description.images.map(image =>
          <div key={image.media_id}>
            <img 
              src={image.url}
              alt={place.name.fi}
              className="large-img"
            />
            <figcaption>
              {image.copyright_holder}
            </figcaption>
          </div>
        )}
      </div>
      <p className="description">{place.description.body}</p>
      <span className="updated">Päivitetty: {convertDate(place.modified_at)}</span>
      <OpeningHours place={place}/>
      <p><i className="fas fa-link"></i> <a href={place.info_url} target="blank">{place.name.fi}</a></p>
      <GoBack />
    </div>
  );
};
export default Place;