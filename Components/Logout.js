import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={(e) => handleLogOut(e)}>Logout</button>
    </div>
  )
}

export default Logout
