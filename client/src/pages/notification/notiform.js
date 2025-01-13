


import axios from 'axios';
import React, { useState } from 'react';
import './notificationnew.css';

function NotificationForm() {
  const [formData, setFormData] = useState({
    
    subject: '',
    message: '',
    date: '',
    time: '',
    wordNoAndAreaDetails: '',
  });



  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('https://smartgarm-panchayat-system-1.onrender.com/notifications', formData)
      .then((response) => {
        setResponseMessage(response.data.message);
        console.log('Notification sent successfully:', response.data);
      })
      
      .catch((error) => {
        setResponseMessage('Failed to send notification.');
        console.error('Error sending notification:', error);
      });
  };
  

  return (
    <section className='notifi-over'>
    <div className="notification-form">
      <h1>Notification</h1>
      
      <form onSubmit={handleSubmit}>
       
<div className='noti-class'>
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label></div>

        <div className='noti-class'>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required/>
        </label></div>
<div className='noti-class'>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
        </label></div>
        <div className='noti-class'>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required/>
        </label></div>
        <div className='noti-class'>
        <label>
          Word No. & Area Details:
          <input type="text" name="wordNoAndAreaDetails" value={formData.wordNoAndAreaDetails} onChange={handleChange} />
        </label></div>
<div className='noti-button'>
        <button type="submit">SEND NOTIFICATION</button></div>
      </form>
                
      {responseMessage && <p>{responseMessage}</p>}
    </div></section>
  );
}

export default NotificationForm;
