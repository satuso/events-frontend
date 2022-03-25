import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <div className="card">
      <div className="empty">
        {place.description?.images && place.description.images.slice(0, 1).map(image =>
          <div key={image.media_id}>
            <img 
              src={image.url}
              alt={image.copyright_holder}
              className="small-img"
            />
          </div>
        )}
      </div>
      <div className="card-details">
        <h2><i className="fas fa-thumbtack"></i> {place.name.fi}</h2>
        <p>{place.description?.intro}</p>
        <p><i className="fas fa-map-marker-alt"></i> {place.location.address.street_address} {place.location.address.postal_code} {place.location.address.locality}</p>
      </div>
    </div>
  );
};
export default PlaceCard;