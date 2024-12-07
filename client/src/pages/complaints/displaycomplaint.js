// // ComplaintList.js
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import "./displaycomplaint.css"; // Custom CSS for styling

// const ComplaintList = () => {
//     const [complaints, setComplaints] = useState([]);

//     // Fetch complaint data from backend on component mount
//     useEffect(() => {
//         const fetchComplaints = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/displaycomplaint'); // Adjust URL as needed
//                 setComplaints(response.data); // Assuming response.data is an array of complaints
//             } catch (error) {
//                 console.error('Error fetching complaints:', error);
//             }
//         };

//         fetchComplaints();
//     }, []); // Empty dependency array means this runs once when the component mounts

//     return (
//         <div className="complaint-list">
//             <h2>Existing Complaints</h2>
//             <ul>
//                 {complaints.map((complaint, index) => (
//                     <li key={index}>
//                         <h3>{complaint.complaintType}</h3>
//                         <p>{complaint.complaintDetails}</p>
//                         <p><strong>User:</strong> {complaint.username}</p>
//                         <p><strong>Email:</strong> {complaint.email}</p>
//                         <div className="complaint-images">
//                             {complaint.photo && <img src={`http://localhost:3000/${complaint.photo}`} alt="Complaint Issue" />}
//                             {complaint.idProof && <img src={`http://localhost:3000/${complaint.idProof}`} alt="ID Proof" />}
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ComplaintList;


// ComplaintList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./displaycomplaint.css";

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await axios.get('http://localhost:3000/displaycomplaint');
                setComplaints(response.data);
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        fetchComplaints();
    }, []);

    return (
        <div className="complaint-list">
            <h2>Existing Complaints</h2>
            <ul>
                {complaints.map((complaint, index) => (
                    <li key={index}>
                        <h3><strong>Complaint Type:</strong>  {complaint.complaintType}</h3>
                        <p><strong>Complaint Details:</strong>  {complaint.complaintDetails}</p>
                        <p><strong>User:</strong> {complaint.username}</p>
                        <p><strong>Phone:</strong> {complaint.phone}</p>
                        <p><strong>Email:</strong> {complaint.email}</p>
                        <p><strong>Address:</strong> {complaint.address}</p>
                        
                        <div className="complaint-images">
                            <div className="img-1">{complaint.photo && <img src={`http://localhost:3000/${complaint.photo}`} alt="Complaint Issue" />}
                            </div>
                            <div className='img-2'>{complaint.idProof && <img src={`http://localhost:3000/${complaint.idProof}`} alt="ID Proof" />}
                            </div></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComplaintList;
