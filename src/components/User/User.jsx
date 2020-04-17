import React from 'react'
import { useQuery, gql } from '@apollo/client'

const USERS = gql`
  {
    users {
      email
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(USERS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.users.map(({ id, name }) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ))
}
