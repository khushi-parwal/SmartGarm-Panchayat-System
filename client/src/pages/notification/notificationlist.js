import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './notificationlist.css';

function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server
    axios.get('http://localhost:3000/getnotification')
      .then((response) => {
        setNotifications(response.data);
        console.log('Notifications fetched successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  return (
    <div className="notification-list">
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications available</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification._id}>
              <h3>{notification.subject}</h3>
              
              <p><strong>Message:</strong> {notification.message}</p>
              <p><strong>Date:</strong> {new Date(notification.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {notification.time}</p>
              <p><strong>Word No. & Area Details:</strong> {notification.wordNoAndAreaDetails}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationList;
