import { UserContext } from './UserProvider';
import React, { useContext } from 'react'

const UserProfile = () => {
    const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p> 
    </div>
  )
}

export default UserProfile
