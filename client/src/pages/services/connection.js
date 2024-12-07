

import axios from 'axios';
import React, { useState } from 'react';
import "./connection.css";


const NewConnectionApplication = () => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        address: '',
        email: '',
        connectionType: '',
        installationDate: '',
        idProof: null,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('username', formData.username);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('address', formData.address);
        formDataObj.append('email', formData.email);
        formDataObj.append('connectionType', formData.connectionType);
        formDataObj.append('installationDate', formData.installationDate);
        formDataObj.append('idProof', formData.idProof);

        try {
            const response = await axios.post('http://localhost:3000/new-connection', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSubmitted(true);
            console.log(response.data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className='connection-over'>
        <div className="connection-form">
            {submitted ? (
                <div className="submission-message">
                    <span className="thank-you-message">✔</span>
                    <p>We will contact you within a week. Thank you!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>New Connection Application</h1>
                    <div className="form-group2">
                        <label htmlFor="username"><i className="fas fa-user"></i> User name</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="phone"><i className="fas fa-phone mirror-icon"></i> Phone Number</label>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor="address"><i className="fas fa-map-marker-alt"></i> Address</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="select-group">
                        <label htmlFor="connection-type">Select Connection Type</label>
                        <select id="connection-type" name="connectionType" value={formData.connectionType} onChange={handleChange}>
                            <option value="">Select Connection Type</option>
                            <option value="Water Connection">Water Connection</option>
                            <option value="Electricity Connection">Electricity Connection</option>
                        </select>
                    </div>
                    <div className="form-group2">
                        <label htmlFor="installation-date"><i className="fas fa-calendar-alt"></i> Choose Preferred Installation Date</label>
                        <div className="date-picker">
                            <input type="date" id="installation-date" name="installationDate" value={formData.installationDate} onChange={handleChange} />
                            
                        </div>
                    </div>
                    
                   
                    <div className="form-group2">
                        <label htmlFor="id-proof"><i className="fas fa-id-card"></i> Upload Your ID Proof</label>
                        <input type="file" id="id-proof" name="idProof" onChange={handleChange} />
                        </div>
          

            <div className='button-button'>
                    <button type="submit" className="submit-btn">SUBMIT</button>
                    </div></form>
            )}
        </div></section>
    );
}

export default NewConnectionApplication;
