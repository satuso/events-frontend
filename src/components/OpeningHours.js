import React from "react";

const OpeningHours = ({ place }) => {
  const getDay = (day) => {
    if (day === 1) return "Maanantai";
    if (day === 2) return "Tiistai";
    if (day === 3) return "Keskiviikko";
    if (day === 4) return "Torstai";
    if (day === 5) return "Perjantai";
    if (day === 6) return "Lauantai";
    if (day === 7) return "Sunnuntai";
  };

  const getTime = (time) => {
    const displayTime = time.split(":");
    return displayTime[0] + ":" + displayTime[1];
  };
  return (
    <div className="opening-hours">
      <h3><i className="far fa-calendar-alt"></i> Aukioloajat</h3>
      {place.opening_hours && place.opening_hours.hours.map(weekday => 
        <p className="hours" key={weekday.weekday_id}>{getDay(weekday.weekday_id)}: {weekday.opens && getTime(weekday.opens)} - {weekday.opens && getTime(weekday.closes)}</p>
      )}
    </div>
  );
};
export default OpeningHours;