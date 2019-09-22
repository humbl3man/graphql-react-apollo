/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const LaunchDetails = ({ details }) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    rocket: { rocket_name, rocket_type, rocket_id },
  } = details
  return (
    <>
      <h1
        className={`display-4 mb-3 ${
          launch_success ? 'text-success' : 'text-danger'
        }`}
      >
        {mission_name}
      </h1>
      <h3>Launch Details</h3>
      <ul className="list-group mb-3">
        <li className="list-group-item">Flight number: {flight_number}</li>
        <li className="list-group-item">
          Launched:{' '}
          <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
        </li>
        {launch_success !== null && (
          <li className="list-group-item">
            Successful launch:{' '}
            <span className={launch_success ? 'text-success' : 'text-danger'}>
              {launch_success ? 'yes' : 'no'}
            </span>
          </li>
        )}
      </ul>
      <h3>Rocket Details</h3>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket name: {rocket_name}</li>
        <li className="list-group-item">Rocket type: {rocket_type}</li>
      </ul>
      <Link to="/" className="btn btn-primary btn-sm mt-3">
        Back to Launches
      </Link>
    </>
  )
}

export default LaunchDetails
