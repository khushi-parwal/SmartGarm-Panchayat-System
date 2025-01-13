import axios from 'axios';
import React, { useState } from 'react';
import "./complaintnew.css";

const RegisterComplaint1 = () => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        address: '',
        email: '',
        complaintType: '',
        complaintDetails: '',
        idProof: null,
        photo: null,
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
        
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post('http://localhost:3000/complaint', data, {
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
        <section className="over">
            <div className="complaint-form">
                {submitted ? (
                    <div className="submission-message">
                        <span className="thank-you-message">✔</span>
                        <p>We will contact you within a week. Thank you!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                
                        
       
       <h1 style ={{ textAlign: 'center', marginBottom: '20px' , fontSize: '24px', fontweight: 'bold'}}>Register Your Complaints</h1>
           <div className="form-group1">
               <label htmlFor="username"><i className="fas fa-user"></i> User name</label>
               <input type="text"  name="username" value={formData.username} onChange={handleChange} required />
           </div>
           <div className="form-group1">
               <label htmlFor="phone"><i className="fas fa-phone mirror-icon"></i> Phone Number</label>
               <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
           </div>
           <div className="form-group1">
               <label htmlFor="address"><i className="fas fa-map-marker-alt"></i> Address</label>
               <input type="text" name="address" value={formData.address} onChange={handleChange} required />
           </div>
           <div className="form-group1">
                   <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                   <input type="email"  name="email" value={formData.email} onChange={handleChange} required/>
               </div>
               <div className="form-group1">
                   <label htmlFor="Complaint-type"><i className="fas fa-file"></i>Select Complaint Type</label>
                   <select  name="complaintType" value={formData.complaintType} onChange={handleChange} required>
                       <option value="">Select Complaint Type</option>
                       <option value="ward">Ward maintenance Complaint</option>
                       <option value="scholarship">Scholarship related Complaint</option>
                   </select>
               </div>
               <div className="form-group1">
                   <label htmlFor="Complaint-Detail"><i className="fas fa-file"></i> Complaint Detail</label>
                   <input type="text"  name="complaintDetails" value={formData.complaintDetails} onChange={handleChange} />
               </div>
               <div className="form-group1">
                   <label htmlFor="id-proof"><i className="fas fa-id-card"></i> Upload Your ID Proof</label>
                   <input type="file"  name="idProof" onChange={handleChange} required/>
               </div>
               <div className="form-group1">
                   <label htmlFor="Photo"><i className="fas fa-image"></i> Upload Photo of the issue</label>
                   <input type="file"  name="photo" onChange={handleChange} required/>
               </div>
               <div className='button-button'>
               <button type="submit" className="submit-btn">SUBMIT</button></div>
               
           
                    </form>
                )}
            </div>
        </section>
    );
};

export default RegisterComplaint1;

