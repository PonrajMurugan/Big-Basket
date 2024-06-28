import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Bank from './Bank';

const Mains = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Bank />}
      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
  );
}

export default Mains;
