import React from "react"
import PlaceCard from "../components/PlaceCard"
import { Link } from "react-router-dom"
import Filter from "../components/Filter"

const Places = ({ places, setFilter, message, loading }) => {
  const tags = ["baari", "galleria", "kahvila", "klubi", "museo", "ravintola", "teatteri"]
  return (
    <div>
      <Filter
        setFilter={setFilter}
        tags={tags}
        message={message}
        loading={loading}
      />
      {places.map(place => 
        <Link to={`/places/${place.id}`} key={place.id}>
          <PlaceCard place={place}/>
        </Link>
      )}
    </div>
  )
}
export default Places