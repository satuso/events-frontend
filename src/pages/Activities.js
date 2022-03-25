import React from "react";
import ActivityCard from "../components/ActivityCard";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const Activities = ({ activities, setFilter, message, loading }) => {
  const tags = ["historia", "luonto", "kansallispuisto", "kävely", "patikointi", "risteily", "saaristo"];
  return (
    <div>
      <Filter 
        setFilter={setFilter}
        tags={tags}
        message={message}
        loading={loading}
      />
      {activities.map((activity, index) => 
        <Link to={`/activities/${activity.id}`} key={index}>
          <ActivityCard activity={activity}/>
        </Link>
      )}
    </div>
  );
};
export default Activities;