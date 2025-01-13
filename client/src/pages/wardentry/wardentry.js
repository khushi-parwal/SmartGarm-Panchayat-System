import axios from 'axios';
import React, { useState } from 'react';
import './wardentry.css';

function NewWardEntry() {
  const [wardNumber, setWardNumber] = useState('');
  const [areaName, setAreaName] = useState('');
  const [landMark, setLandMark] = useState('');
  const [families, setFamilies] = useState('');
  const [voters, setVoters] = useState('');
  const [councilorName, setCouncilorName] = useState('');
  const [councilorNumber, setCouncilorNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const wardData = {
      wardNumber,
      areaName,
      landMark,
      families,
      voters,
      councilorName,
      councilorNumber,
    };

    try {
      const response = await axios.post('http://localhost:3000/wards', wardData);
      console.log(response.data.message);
      alert('Ward entry added successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error adding ward entry.');
    }
  };

  return (
    <section className='ward-over'>
    <div className='ward-form'>
    <form onSubmit={handleSubmit} >
      <h1>New Ward Entry</h1>
      <label >Ward Number</label>
      
      <select placeholder="Enter ward number"
        value={wardNumber} 
        onChange={(e) => setWardNumber(e.target.value)} required> <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option></select>
      
        

       <div className='ward-ward'>
      <label>Area Name</label>
      <input
        type="text"
        placeholder="Enter area name"
        value={areaName}
        onChange={(e) => setAreaName(e.target.value)}
      required/></div> 
      <div className='ward-ward'>
      <label>Land Mark</label>
      <input
        type="text"
        placeholder="Enter land mark"
        value={landMark}
        onChange={(e) => setLandMark(e.target.value)}
      required/></div>
      <div className='ward-ward'>
      <label>Number of Families</label>
      <input
        type="number"
        placeholder="Enter number of families"
        value={families}
        onChange={(e) => setFamilies(e.target.value)} required/></div>
      <div className='ward-ward'>
      <label>Number of Voters</label>
      <input
        type="number"
        placeholder="Enter number of voters"
        value={voters}
        onChange={(e) => setVoters(e.target.value)}
      /></div>
      <div className='ward-ward'>
      <label>Councilor Name</label>
      <input
        type="text"
        placeholder="Enter councilor name"
        value={councilorName}
        onChange={(e) => setCouncilorName(e.target.value)}
      required/></div>
      <div className='ward-ward'>
      <label>Councilor Number</label>
      <input
        type="text"
        placeholder="Enter councilor number"
        value={councilorNumber}
        onChange={(e) => setCouncilorNumber(e.target.value)}
      required/></div>
      <div className='button-button'>
      <button type="submit">ADD DETAILS</button></div>
    </form></div></section>
  );
}

export default NewWardEntry;
