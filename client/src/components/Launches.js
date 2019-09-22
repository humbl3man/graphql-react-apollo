import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'
import LaunchKey from './LaunchKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

class Launches extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Launches</h3>
        <LaunchKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>
            }
            if (error) {
              return console.error(error)
            }
            return (
              <React.Fragment>
                {data.launches.map(item => (
                  <LaunchItem
                    key={`${item.flight_number}_${item.mission_name}`}
                    launch={item}
                  />
                ))}
              </React.Fragment>
            )
          }}
        </Query>
      </React.Fragment>
    )
  }
}

export default Launches
