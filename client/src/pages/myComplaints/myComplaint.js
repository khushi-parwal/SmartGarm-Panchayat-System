


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './myComplaint.css';

// const MyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
//       if (!userId) {
//         setError('You must be logged in to view your complaints.');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:3000/mycomplaints/${userId}`);
//         console.log(response.data); 
//         setComplaints(response.data);
//       } catch (err) {
//         setError('Failed to fetch complaints. Please try again later.');
//       }
//     };


//     fetchComplaints();
//   }, []);

//   return (
//     <div className="my-complaints">
//       <h1>My Complaints</h1>
//       {error && <p className="error">{error}</p>}
//       <ul>
//         {complaints.map((complaint) => (
//           <li key={complaint._id}>
//             <h2>{complaint.complaintType}</h2>
//             <p>{complaint.complaintDetails}</p>
//             <p>Status: {complaint.status || 'Pending'}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComplaints;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './myComplaint.css';

// const MyComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [noComplaints, setNoComplaints] = useState(false); // Track if there are no complaints

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
//       if (!userId) {
//         setError('You must be logged in to view your complaints.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:3000/mycomplaints/${userId}`);
//         console.log(response.data); 

//         if (response.data.length === 0) {
//           setNoComplaints(true); // No complaints found for the user
//         } else {
//           setComplaints(response.data);
//         }
//       } catch (err) {
//         setError('Failed to fetch complaints. Please try again later.');
//       } finally {
//         setLoading(false); // Set loading state to false after the request completes
//       }
//     };

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="my-complaints">
//       <h1>My Complaints</h1>

//       {loading && <p className="loading">Loading complaints...</p>} {/* Show loading text */}
      
//       {error && <p className="error">{error}</p>} {/* Display error message if any */}

//       {noComplaints && <p className="no-complaints">You have no complaints yet.</p>} {/* No complaints message */}

//       {complaints.length > 0 && (
//         <ul>
//           {complaints.map((complaint) => (
//             <li key={complaint._id}>
//               <h2>{complaint.complaintType}</h2>
//               <p>{complaint.complaintDetails}</p>
//               <p>Status: {complaint.status || 'Pending'}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyComplaints;


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
        const response = await axios.get(`http://localhost:3000/mycomplaints/${userId}`);
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
