/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchDetails from './LaunchDetails'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

const Launch = ({ match }) => {
  let {
    params: { flight_number },
  } = match
  flight_number = parseInt(flight_number, 10)

  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h3>Loading...</h3>
          }
          if (error) {
            console.error('query error:', error)
            return (
              <div className="bg-danger" style={{ color: 'white' }}>
                Error processing request...
              </div>
            )
          }
          return <LaunchDetails details={data.launch} />
        }}
      </Query>
    </>
  )
}
export default Launch
