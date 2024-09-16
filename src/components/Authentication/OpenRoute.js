import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const OpenRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  console.log(token);

  if (token === null) {
    return children;
  } else {
    return useNavigate("/dashboard/my-profile");
  }
};

export default OpenRoute;