import React from 'react';

import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './contact.css';


const Contact = () => {
  return (
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
         <li><a href='#'>Home</a></li>
         <li><a href='#Rti'>Notifications</a></li>
         {/* <li><a href='#aboutUs'>Achievements</a></li> */}
        </ul>
        </div>

        <div className='contact-col1'>
        <h3>Contact Us</h3>
        <ul>
        <li>Panchayat & Rural Development Dept, M.P.</li>
        <li ><div><FaPhoneAlt /></div>
        <div className='iconspace'>0731-2456872</div></li>
        <li><div><FaEnvelope /></div><div className='iconspace'>smartgram@mp.gov.in</div></li>
        {/* <li><FaEnvelope />smartgram@mp.gov.in</li> */}
        </ul>
        </div>

        </div>


    <div className='below-footer'>
      <p>© 2024 SmartGram Portal, Goverment of Madhya Pradesh | All Rights Reserved.</p>
      {/* <p style={{fontFamily:'Lucida Bright'}} >~ By Anaya</p> */}
    </div>

    </div>)}
   

export default Contact;