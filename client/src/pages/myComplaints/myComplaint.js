import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './myComplaint.css';

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      
      const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
      if (!userId) {
        setError('You must be logged in to view your complaints.');
        return;
      }

      try {
        const response = await axios.get(`https://smartgarm-panchayat-system-1.onrender.com/complaints/${userId}`);
        console.log(response.data); 
        setComplaints(response.data);
      } catch (err) {
        setError('Failed to fetch complaints. Please try again later.');
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="my-complaints">
      <h1>My Complaints</h1>
      {error && <p className="error">{error}</p>}
      {complaints.length === 0 && !error && <p>No complaints found.</p>}
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <h2>{complaint.complaintType}</h2>
            <p>{complaint.complaintDetails}</p>
            <p>Status: {complaint.status || 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComplaints;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import "./myComplaint.css";

// const MyComplaints = () => {
//     const [complaints, setComplaints] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchComplaints = async () => {
//             try {
//                 const response = await axios.get('https://smartgarm-panchayat-system-1.onrender.com/complaints', {
//                     withCredentials: true, // Send cookies with the request
//                 });
//                 setComplaints(response.data);
//             } catch (err) {
//                 setError('Failed to fetch complaints. Please log in.');
//             }
//         };

//         fetchComplaints();
//     }, []);

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (complaints.length === 0) {
//         return <div>No complaints found.</div>;
//     }

//     return (
//         <div className="complaints-container">
//             <h1>My Complaints</h1>
//             <ul>
//                 {complaints.map((complaint) => (
//                     <li key={complaint._id} className="complaint-item">
//                         <h3>{complaint.complaintType}</h3>
//                         <p>{complaint.complaintDetails}</p>
//                         <small>Status: {complaint.status}</small>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MyComplaints;
