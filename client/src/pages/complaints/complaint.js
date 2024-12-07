import axios from 'axios';
import React, { useState } from 'react';
import "./complaintnew.css";

const Registercomplaint = () => {
    // State variables for form inputs
//     const [formData, setFormData] = useState({
//         username: '',
//         phone: '',
//         address: '',
//         email: '',
//         complaintType: '',
//         complaintDetails: '',
//         idProof:'',
//         photo:''

//     });

//     // Handler for input changes
//     const handleChange = (e) => {
//         const { name, value,type,files } = e.target;
//         setFormData({
//             ...formData,
//             // [name]: value,
//             [name]: type === 'file' ? files[0] : value,
//         });
//     };

//     // Handler for file input
//     const handleFileChange = (e) => {
//         setFormData({
//             ...formData,
//             idProof: e.target.files[0],
//             // [name]: type === 'file' ? files[0] : value,
//         });
//     };
// // Handler for form submission

// const [submitted, setSubmitted] = useState(false);

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataObj = new FormData();
//     formDataObj.append('username', formData.username);
//     formDataObj.append('phone', formData.phone);
//     formDataObj.append('address', formData.address);
//     formDataObj.append('email', formData.email);
//     formDataObj.append('complainttype', formData.complaintType);
//     formDataObj.append('complaintdetails', formData.complaintDetails);
//     formDataObj.append('idProof', formData.idProof);
//     formDataObj.append('photo', formData.photo);

//     try {
//         const response = await axios.post('http://localhost:3000/complaint', formDataObj, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         setSubmitted(true);
//         console.log(response.data.message);
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// };
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
    <section className='over'>
<div className="complaint-form">
    
    {submitted ? (
            <div className="submission-message">
                {/* <span className="thank-you-message">✔</span> */}
                <p>We will contact you within a week. Thank you!</p>
            </div>
        ) : (
        
        <form onSubmit={handleSubmit}>
       
        <h1 style ={{ textAlign: 'center', marginBottom: '20px' , fontSize: '24px', fontweight: 'bold'}}>Register Your Complaints</h1>
            <div className="form-group1">
                <label htmlFor="username"><i className="fas fa-user"></i> User name</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="form-group1">
                <label htmlFor="phone"><i className="fas fa-phone mirror-icon"></i> Phone Number</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group1">
                <label htmlFor="address"><i className="fas fa-map-marker-alt"></i> Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group1">
                    <label htmlFor="email"><i className="fas fa-envelope"></i> Email address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="form-group1">
                    <label htmlFor="Complaint-type"><i className="fas fa-file"></i>Select Complaint Type</label>
                    <select id="Complaint-type" name="complaintType" value={formData.complaintType} onChange={handleChange} required>
                        <option value="">Select Complaint Type</option>
                        <option value="type1">Ward maintenance Complaint</option>
                        <option value="type2">Scholarship related Complaint</option>
                    </select>
                </div>
                <div className="form-group1">
                    <label htmlFor="Complaint-Detail"><i className="fas fa-file"></i> Complaint Detail</label>
                    <input type="text" id="Complaint-Detail" name="complaintDetails" value={formData.complaintDetails} onChange={handleChange} />
                </div>
                <div className="form-group1">
                    <label htmlFor="id-proof"><i className="fas fa-id-card"></i> Upload Your ID Proof</label>
                    <input type="file" id="id-proof" name="idProof" onChange={handleChange} required/>
                </div>
                <div className="form-group1">
                    <label htmlFor="Photo"><i className="fas fa-image"></i> Upload Photo of the issue</label>
                    <input type="file" id="Photo" name="Photo" onChange={handleChange} required/>
                </div>
                <div className='button-button'>
                <button type="submit" className="submit-btn">SUBMIT</button></div>
                
            </form> 
            )}
            </div>
        </section>
        
    );
}

export default Registercomplaint;

// import axios from 'axios';
// import React, { useState } from 'react';
// import './complaint.css';

// const RegisterComplaint = () => {
//     // State variables for form inputs
//     const [formData, setFormData] = useState({
//         username: '',
//         phone: '',
//         address: '',
//         email: '',
//         complaintType: '',
//         complaintDetails: '',
//         idProof: null,
//         photo: null,
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const [responseMessage, setResponseMessage] = useState('');
//     const [uploadedFiles, setUploadedFiles] = useState({ idProof: '', photo: '' });

//     // Handler for input changes
//     const handleChange = (e) => {
//         const { name, value, type, files } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'file' ? files[0] : value,
//         });
//     };

//     // Handler for form submission  

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const formDataObj = new FormData();
//         formDataObj.append('username', formData.username);
//         formDataObj.append('phone', formData.phone);
//         formDataObj.append('address', formData.address);
//         formDataObj.append('email', formData.email);
//         formDataObj.append('complaintType', formData.complaintType);  // Make sure spelling matches backend
//         formDataObj.append('complaintDetails', formData.complaintDetails);  // Ensure correct field name
//         formDataObj.append('idProof', formData.idProof);
//         formDataObj.append('photo', formData.photo);
    
//         try {
//             const response = await axios.post('http://localhost:3000/complaints', formDataObj, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setSubmitted(true);
//             console.log(response.data.message);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };
    
//     return (
//         <div className="complaint-container">
//             {submitted ? (
//                 <div className="submission-message">
//                     <span className="thank-you-message">✔</span>
//                     <p>{responseMessage || "We will contact you within a week. Thank you!"}</p>
//                     {/* Display the uploaded images */}
//                     <div>
//                         {uploadedFiles.idProof && (
//                             <div>
//                                 <h3>ID Proof:</h3>
//                                 <img src={`http://localhost:3000/${uploadedFiles.idProof}`} alt="ID Proof" style={{ width: '200px' }} />
//                             </div>
//                         )}
//                         {uploadedFiles.photo && (
//                             <div>
//                                 <h3>Photo of the Issue:</h3>
//                                 <img src={`http://localhost:3000/${uploadedFiles.photo}`} alt="Issue Photo" style={{ width: '200px' }} />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Register Your Complaint</h1>
//                     <div className="form-group">
//                         <label htmlFor="username">User Name</label>
//                         <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phone">Phone Number</label>
//                         <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="address">Address</label>
//                         <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email Address</label>
//                         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="complaintType">Select Complaint Type</label>
//                         <select id="complaintType" name="complaintType" value={formData.complaintType} onChange={handleChange} required>
//                             <option value="">Select Complaint Type</option>
//                             <option value="type1">Ward Maintenance Complaint</option>
//                             <option value="type2">Scholarship Related Complaint</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="complaintDetails">Complaint Details</label>
//                         <input type="text" id="complaintDetails" name="complaintDetails" value={formData.complaintDetails} onChange={handleChange} />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="idProof">Upload Your ID Proof</label>
//                         <input type="file" id="idProof" name="idProof" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="photo">Upload Photo of the Issue</label>
//                         <input type="file" id="photo" name="photo" onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="submit-btn">SUBMIT</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default RegisterComplaint;
