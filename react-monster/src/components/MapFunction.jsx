import React from 'react'

const userInfo = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    location: "New York, USA"
  },
  {
    username: "sarah_smith",
    email: "sarah.smith@example.com",
    location: "London, UK"
  },
  {
    username: "mike_johnson",
    email: "mike.johnson@example.com",
    location: "Sydney, Australia"
  }
];

const MapFunction = () => {
  return (
    <div>
      {userInfo.map(person => (
        <ul key={person.username}>
          <li>{person.username}</li>
          <li>{person.email}</li>
          <li>{person.location}</li>
        </ul>
      ))}
    </div>
  )
}

export default MapFunction;