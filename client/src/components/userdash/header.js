import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assests/pas_logo.png';


const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId'); // Clear local storage
    navigate('/'); // Redirect to home page
  };
  



  return (
    <div className='combine'>

{/* <div className='image-text'> */}
    <div className='logo'>
   <img src={logo} alt='iamge' style={{width:'200px',height:'150px'} }/>

    <div className="header">
      <h1>SmartGram</h1>
      <div>Government of Madhya Pradesh</div> </div></div>
      
      <div className="nav">
        <span><Link to="/mycomplaint">My Complaints</Link></span>
        <span><Link to="/notificationlist">Notifications</Link></span>
        <span onClick={handleLogout}>Logout</span>
        {/* <button onClick={handleLogout} className="logout-button">
      Logout
    </button> */}
        
    
      </div>
   
    </div>
    );
};

export default Header;