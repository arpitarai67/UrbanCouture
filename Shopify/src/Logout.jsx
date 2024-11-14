import React, { useEffect } from 'react';
import { logoutUser } from './api';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    navigate('/login'); // Redirect to login after logout
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
