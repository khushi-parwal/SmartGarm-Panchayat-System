import React, { useState } from 'react';
import './wardexp.css'; 
import backgroundImage from './bgwardmaintainceandexpenses.webp';

// function WardMaintenanceForm() {
//   const [formData, setFormData] = useState({
//     wardNumber: '',
//     subject: '',
//     message: '',
//     date: '',
//     time: '',
//     wardNoAndAreaDetails: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission   
 
//     console.log(formData);   

//   };

//   return (
//     <div className="ward-maintenance-form">
//       <h1>Ward Maintenance and Expenses</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Ward Number:
//           <select name="wardNumber" value={formData.wardNumber} onChange={handleChange}>
//             <option value="">Select Ward</option>
//             {/* Add options for different wards here */}
//             <option value="1">Ward 1</option>
//             <option value="2">Ward 2</option>
//             {/* ... */}
//           </select>
//         </label>

//         <label>
//           Subject:
//           <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
//         </label>

//         <label>
//           Message:
//           <textarea name="message" value={formData.message} onChange={handleChange} />
//         </label>   


//         <label>
//           Date:
//           <input type="date" name="date" value={formData.date} onChange={handleChange} />
//         </label>

//         <label>
//           Time:
//           <input type="time" name="time" value={formData.time} onChange={handleChange} />
//         </label>

//         <label>
//           Ward No. & Area Details:
//           <input type="text" name="wardNoAndAreaDetails" value={formData.wardNoAndAreaDetails} onChange={handleChange} />
//         </label>

//         <button type="submit">SUBMIT</button>
//       </form>
//     </div>
//   );
// }

// export default WardMaintenanceForm;


function WardMaintenanceForm() {
  const [formData, setFormData] = useState({
    wardNumber: '',
    subject: '',
    message: '',
    date: '',
    time: '',
    wardNoAndAreaDetails: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission   
//  logic here, e.g., send data to server
    console.log(formData);

    // Clear   
//  form fields after submission
    setFormData({
      wardNumber: '',
      subject: '',
      message: '',
      date: '',
      time: '',
      wardNoAndAreaDetails: '',
    });
  };

  return (
    <div className="ward-maintenance-form">
      
      <form onSubmit={handleSubmit}style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1>Ward Maintenance and Expenses</h1>
        <label>
          Ward Number:
          <select name="wardNumber" value={formData.wardNumber} onChange={handleChange}>
            <option value="">Select Ward</option>
            {/* Add options for different wards here */}
            <option value="1">Ward 1</option>
            <option value="2">Ward 2</option>
            {/* ... */}
          </select>
        </label>

        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>   


        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>

        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>

        <label>
          Ward No. & Area Details:
          <input type="text" name="wardNoAndAreaDetails" value={formData.wardNoAndAreaDetails} onChange={handleChange} />
        </label>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default WardMaintenanceForm;