import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-2xl font-semibold'>Ruko Jara Sabar Karo...</div>;
  }

  return (
    isAuthenticated && (<div className="container mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
    <div className="flex items-center justify-center mb-6">
      <img src={user.picture} alt="Profile Picture" className="w-20 h-20 rounded-full"/>
    </div>
    
    <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
    <p className="text-gray-600 mb-4">{user.email}</p>

  </div>)
  )
}

export default Profile