import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Header from "./components/Header"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Places from "./pages/Places"
import Activities from "./pages/Activities"
import Event from "./pages/Event"
import Place from "./pages/Place"
import Activity from "./pages/Activity"
import ScrollToTop from "./components/ScrollToTop"

const baseUrl = '/api'

const App = () => {
  const [events, setEvents] = useState([])
  const [places, setPlaces] = useState([])
  const [activities, setActivities] = useState([])
  const [filter, setFilter] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${baseUrl}/events/?limit=2000`)
      .then(data => {
        setEvents(data.data.data)
        setLoading(false)
      })
      .catch(error => {
        setMessage(error.toString())
      })
  }, [filter])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${baseUrl}/places`)
      .then(data => {
        setPlaces(data.data.data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${baseUrl}/activities`)
      .then(data => {
        setActivities(data.data.rows)
        setLoading(false)
      })
  }, [])

  const convertId = (id) => {
    if (id) {
      const convert = id.split(":")
      return convert[1]
    }
  }

  let matchEvents = events.filter(item => item.description.body.toLowerCase().includes(filter))
  let matchPlaces = places.filter(item => item.name.fi.toLowerCase().includes(filter))
  let matchActivities = activities.filter(item => item.descriptions.fi ? item.descriptions.fi.name.toLowerCase().includes(filter) : item.descriptions.en.name.toLowerCase().includes(filter))
  
  if (!filter) {
    matchEvents = []
    matchPlaces = []
    matchActivities = []
  } else {
    matchEvents = events.filter(item => item.description.body.toLowerCase().includes(filter))
    matchPlaces = places.filter(item => item.name.fi.toLowerCase().includes(filter))
    matchActivities = activities.filter(item => item.descriptions.fi ? item.descriptions.fi.name.toLowerCase().includes(filter) : item.descriptions.en.name.toLowerCase().includes(filter))
  }

  return (
    <div className="container">
      <ScrollToTop/>
      <Header 
        setFilter={setFilter}
      />
      <Routes>
        <Route exact path='*' element={<Home/>}/>
        <Route exact path='/events' element={
          <Events 
            events={matchEvents}
            setFilter={setFilter}
            convertId={convertId}
            message={message}
            loading={loading}
          />
        }/>
        <Route exact path='/places' element={
          <Places 
            places={matchPlaces}
            setFilter={setFilter}
            message={message}
            loading={loading}
          />
        }/>
        <Route exact path='/activities' element={
          <Activities
            activities={matchActivities}
            setFilter={setFilter}
            message={message}
            loading={loading}
          />
        }/>
        {matchEvents.map((event, index) => 
          <Route key={index} exact path='/events/:id' element={
            <Event 
              event={event}
              setFilter={setFilter}
            />
          }/>
        )}
        {matchPlaces.map(place => 
          <Route key={place.id} exact path='/places/:id' element={
            <Place
              place={place}
              setFilter={setFilter}
            />
          }/>
        )}
        {matchActivities.map(activity => 
          <Route key={activity.id} exact path='/activities/:id' element={
            <Activity
              activity={activity}
              setFilter={setFilter}
            />
          }/>
        )}
      </Routes>
    </div>
  )
}

export default App