import "./TriplList.css"

import { useState, } from "react"
import { useFetch } from "./hooks/useFetch"

function TripList() {
    const [url, setUrl] = useState("http://localhost:3000/trips")
    const {data:trips, isPending} =  useFetch(url)

  return (
    <div className="trip-list">
    <h1 className='font-bold font-20'>TripList</h1>
    { isPending && <div>Loading...</div>}
    <ul>
      {trips && trips.map((trip) => {
        return (
          <li className='row-' key={trip.title}>
            <h2>{trip.title}</h2>
            <p>{trip.price}</p>
          </li>
        )
      })}
    </ul>
    <div className='filters flex gap-10 '>
      <button className='font-16 hover:bg-blue-400 border-s-transparent bg-blue-700  text-white' onClick={() => setUrl('http://localhost:3000/trips?loc=Europe')}>European Trips</button>
      <button className='font-16 hover:bg-blue-400 border-s-transparent bg-blue-700  text-white' onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
    </div>
    </div>
  )
}

export default TripList