
// ComplaintList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./displaycomplaint.css";

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await axios.get('https://smartgarm-panchayat-system-4.onrender.com/displaycomplaint');
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
                            <div className="img-1">{complaint.photo && <img src={`https://smartgarm-panchayat-system-4.onrender.com/${complaint.photo}`} alt="Complaint Issue" />}
                            </div>
                            <div className='img-2'>{complaint.idProof && <img src={`https://smartgarm-panchayat-system-4.onrender.com/${complaint.idProof}`} alt="ID Proof" />}
                            </div></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComplaintList;
