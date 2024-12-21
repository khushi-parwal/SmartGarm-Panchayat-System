import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './displayward.css';

function Displayward() {
  const [wardEntries, setWardEntries] = useState([]);

  // Fetch ward entries from the server
  useEffect(() => {
    const fetchWardEntries = async () => {
      try {
        const response = await axios.get('https://smartgarm-panchayat-system-4.onrender.com/displayward');
        setWardEntries(response.data);
      } catch (error) {
        console.error('Error fetching ward entries:', error);
      }
    };

    fetchWardEntries();
  }, []);

  return (
    <div className="ward-entry-container">
      <h1>Ward Entries</h1>
      {wardEntries.length > 0 ? (
        <ul className="ward-entry-list">
          {wardEntries.map((entry) => (
            <li key={entry._id} className="ward-entry-item">
              <h2>Ward Number: {entry.wardNumber}</h2>
              <p><b>Area Name: </b>{entry.areaName}</p>
              <p><b>Landmark:</b> {entry.landMark}</p>
              <p><b>Families:</b> {entry.families}</p>
              <p><b>Voters: </b>{entry.voters}</p>
              <p><b>Councilor Name:</b> {entry.councilorName}</p>
              <p><b>Councilor Number:</b> {entry.councilorNumber}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ward entries available.</p>
      )}
    </div>
  );
}

export default Displayward;
