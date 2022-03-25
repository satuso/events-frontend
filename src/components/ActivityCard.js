import React from "react";

const ActivityCard = ({ activity }) => {
  return (
    <div className="card">
      <div className="empty">
        {activity.media && activity.media.slice(0, 1).map(image =>
          <img 
            src={image.largeUrl}
            key={image.largeUrl}
            alt={image.alt}
            className="small-img"
          />)}
      </div>
      <div className="card-details">
        <h2><i className="fas fa-thumbtack"></i> {activity.descriptions.fi ? activity.descriptions.fi.name : activity.descriptions.en.name}</h2>
      </div>
    </div>
  );
};
export default ActivityCard;