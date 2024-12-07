import React from 'react';
import Card from './card.js';
import Contact from './contact.js';
import Header from './header.js';
import './userdash.css';

function Userdash() {
  return (
    <div className="userdash-container">
      <Header />
      <Card/>
      <Contact/>
      
    </div>
  );
}

export default Userdash;