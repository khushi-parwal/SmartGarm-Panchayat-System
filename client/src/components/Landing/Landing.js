// import react from "react";
// import './Landing.css';


import { React } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import logo from '../../assests/pas_logo.png';
import './Landing.css';
import { default as rural } from './ach1.png';
import vocal from './ach2.png';
import road from './ach3.jpg';
import women from './ach_best.png';



const Landing = () => {

  const images = [
    {url:'pmksn.jpeg'},
    { url: "pmay.jpeg" },
    { url: "PAS5.png" },
    { url: "pmsy.jpeg" },
  ];
   

  return (
    <div className='complete-home'>
    <div className='combine'>
    <div className='logo'>
   <img src={logo} alt='#' style={{width:'200px',height:'150px'} }/>

    <div className="header">
      <h1>SmartGram</h1>
      <div>Government of Madhya Pradesh</div> </div></div>
      
      <div className="nav">
        {/* <span>About Us</span> */}
        {/* <span>Contact Us</span> */}
        <span><Link to="/login">User</Link></span>
        <span><Link to="/adminlogin">Admin</Link></span>
      </div>
   </div>

   
  
  <div className='slider' style={{ position: 'relative', width: '100%', height: '80vh'}}>
      <SimpleImageSlider
      // style={{
      //     objectFit: "cover", // Ensures the image covers the entire slider without distortion
      //     objectPosition: "center", // Center the image
      //   }}
        padding={0}
        margin={0}
       
        width={"100%"}
        height={"100%"}
        images={images}
        showBullets={true}
        showNavs={true} 
        slideImageFit="cover"
      >
    
      </SimpleImageSlider>

      <div style={{
        position: 'absolute',
        top: '113px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        width: '100%'
    
      }}>
        <h1 style={{
          fontSize: '60px',
          fontWeight: '500',
          marginTop: '15',
          color:'black',
          textAlign:'center',
        }}>
          Bringing smile to millions
        </h1>
        <div style={{ marginTop: '20px' }}>
          <button style={{
            marginTop: '10px',

            padding: '14px 25px',
            borderRadius: '30px',
            fontSize: 'large',
            cursor: 'pointer',
            border: 0,
            outline: 0,
            background: 'white',
            color: 'black',
            border: '3px solid blue'
          }}>
            <NavLink to='/schemes'>Know more </NavLink>
            </button>
          
        </div>
      </div>
    </div>

  

   <div className='Completeaboutus'>
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="purpose">
          <h3>Our Purpose</h3>
          <p>
            To empower the rural communities by providing a platform for direct engagement with their local government. This system promotes transparency, and improves governance that helps to bridge the gap between the government and its constituents, leading to a more equitable and prosperous rural India. To offer a promising solution to the challenges faced by rural communities in India.
          </p>
        </div>
        <div className="services">
          <h3>Our Services</h3>
          <p>
            Enabling citizens to raise concerns, report issues, and track the progress of their requests directly with their local panchayat. Providing real-time updates on panchayat activities, budgets, and decision-making processes. By automating administrative tasks and streamlining communication, we ensure service delivery within 7 days to rural communities.
          </p>
        </div>
      </div>
    </div>
    </div>

    <div className="achievements">
      <h2>Our Achievements</h2>
      <p>In the past few years, Gram Panchayats have taken several beneficiary actions for the citizens that involves:</p>
<div className='paracard'>
      Improved access to credit and financial services for rural communities.
           <br></br>Promoted sustainable agriculture practices and improving agricultural productivity.
           <br></br>Supported rural entrepreneurship and job creation.
          <br></br>Empowered rural women and youth through education, training, and economic opportunities. 
        <br></br>Enhanced rural infrastructure, including roads, bridges, and broadband connectivity.
        </div>
      <div className="achievement-cards">
        <div className="card">
          <img src={rural} alt="NBFCs & Rural Development" />
          {/* <h3>NBFCs & Rural Development</h3> */}
          <p>Promoting Financial Services in Rural Areas</p>
        </div>
        <div className="card">
          <img src={vocal} alt="Rural Entrepreneurship" />
          {/* <h3>Rural Entrepreneurship</h3> */}
          <p>Vocal for Local</p>
        </div>
        <div className="card">
          <img src={road} alt="Road Development" />
          {/* <h3>Road Development</h3> */}
          <p>Road Development</p>
        </div>
        <div className="card">
          <img src={women} alt="Women Empowerment" />
          {/* <h3></h3> */}
          <p>Women Empowerment</p>
        </div>
      </div>
    </div>


      <div className='merged' id='contact'>
    <div className='mainfooter' >
        <div className='contact-col1'>
            <h3>Policy</h3>
            <ul>
                <li>Hyper Linking Policy</li>
                <li>Privacy Policy</li>
                <li>Copyright Policy</li>
            </ul>
         </div>

      
        <div className='contact-col1'>
        <h3>Quick Links</h3>
        <ul>
         <li><Link to= '/login'>UserLogin</Link></li>
         <li><Link to='/adminlogin' >AdminLogin</Link></li>
         
        </ul>
        </div>

        <div className='contact-col1'>
        <h3>Contact Us</h3>
        <ul>
        <li>Panchayat & Rural Development Dept, M.P.</li>
        <li ><div><FaPhoneAlt /></div>
        <div className='iconspace'>0731-2456872</div></li>
        <li><div><FaEnvelope /></div><div className='iconspace'>smartgram@mp.gov.in</div></li>
        
        </ul>
        </div>

        </div>


    <div className='below-footer'>
      <p>© 2024 SmartGram Portal, Goverment of Madhya Pradesh | All Rights Reserved.</p>
      
    </div>

    </div>
    </div>

    );
};

export default Landing;