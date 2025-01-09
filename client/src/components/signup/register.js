
import { faEnvelope, faIdCard, faLock, faMapMarkerAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './register.css';

function Register() {

  const [name,setName]=useState()
  const [aadhar,setId]=useState()
  const [phone,setNumber]=useState()
  const [address,setAddress]=useState()
  const [email,setEmail]=useState()
  const [gender,setGender]=useState()
  const [wardno,setWard]=useState()
  const [password,setPassword]=useState()



  const [submitted, setSubmitted] = useState(false);


  const handleSubmit=(e)=>{
    setSubmitted(true);

    e.preventDefault()
  axios.post('http://localhost:3000/register',{name,aadhar,email,phone,address,gender,wardno,password})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log('Error:', error);
  })
  
}

  
return (
 <section className='register-over'>
    <div className="register-container">
    <h1>Join SmartGram Today!</h1>
    {submitted ? (
                <div className="thank-you-message">
                    
                    <p>Account created successfully!<span className="thank-you-message">✔</span></p>
                    <p><Link to="/login"><a href='#'><u>Back to Login</u></a></Link></p>
                </div>
            ) : (

      <form onSubmit={handleSubmit}>
      <div className="input-group1">
        <FontAwesomeIcon icon={faUser } />
        <input type="user" id="name" placeholder="User Name" className='space' required
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      <div className="input-group1">
        <FontAwesomeIcon icon={faPhone}  />
        <input type="phone" id="phone" placeholder="Phone Number" className='space' required
        onChange={(e)=> setNumber(e.target.value)} />
      </div>
      <div className="input-group1">
        <FontAwesomeIcon icon={faEnvelope} />
        <input type="email" id="email" placeholder="Email address" className='space' required
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <div className="input-group1">
        <FontAwesomeIcon icon={faLock} />
        <input type="password" id="password" placeholder="Password" className='space' required
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>
      <div className="input-group1">
        <FontAwesomeIcon icon={faIdCard} />
        <input type="aadhar" id="aadhar" placeholder="Aadhar id" className='space' required
        onChange={(e)=> setId(e.target.value)} />
      </div>
      <div className="drop-down">
        <select id="gender" onChange={(e)=> setGender(e.target.value)} type="select" required>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        
      </div>
      <div className="drop-down">
        <select id="wardno" onChange={(e)=> setWard(e.target.value)} type="select" required>
          <option>Ward no.</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        
      </div>
      <div className="input-group1">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <input type="address" id="address" placeholder="Address" className='space' required
          onChange={(e)=> setAddress(e.target.value)}
        />
      </div>
      <div className="terms">
        By signing up, you agree to our Terms and Conditions and Privacy Policy.
      </div>
      <div className='button-button'>
      <button type="submit" className="btn">Create new account </button>
      </div>
      </form>
            )}
    </div>
           
    </section>
  );
}
export default Register;

