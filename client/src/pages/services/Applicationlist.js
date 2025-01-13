// src/components/ApplicationList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Applicationlist.css';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/applications')
            .then((response) => {
                setApplications(response.data);
            })
            .catch((error) => {
                console.error('Error fetching applications:', error);
            });
    }, []);

    return (
        <div className="application-list">
            <h1>Submitted Applications</h1>
            {applications.map((app) => (
                <div key={app._id} className="application-item">
                    <h3>{app.username}</h3>
                    <p><b>Phone:</b> {app.phone}</p>
                    <p><b>Email: </b>{app.email}</p>
                    <p><b>Connection Type:</b> {app.connectionType}</p>
                    <p><b>Address:</b> {app.address}</p>
                    <p><b>Installation Date: </b>{app.installationDate}</p>
                    {app.idProof && (
                        <div className="id-proof">
                            <h4>ID Proof:</h4>
                            <img src={app.idProof} alt="ID Proof" width="200" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ApplicationList;
