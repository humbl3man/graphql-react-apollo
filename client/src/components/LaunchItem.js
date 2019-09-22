/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const LaunchItem = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_success,
    launch_date_local,
  } = launch

  function renderLaunchSuccessMessage(launch_success) {
    const clsName = launch_success ? 'text-success' : 'text-danger'
    const msg = launch_success ? 'Successful' : 'Failed'
    return <p className={clsName}>{msg}</p>
  }

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            {launch_success !== null ? (
              <span className={launch_success ? 'text-success' : 'text-danger'}>
                {mission_name}
              </span>
            ) : (
              mission_name
            )}
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
          {launch_success !== null &&
            renderLaunchSuccessMessage(launch_success)}
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-primary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
