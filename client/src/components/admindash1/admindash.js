import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assests/pas_logo.png';
import './admindash.css';


function ADashboard() {
  return (
    <div>
      
      <div className='combine'>
            {/* Logo Section */}
            <div className='logo'>
                <img src={logo} alt="Logo" style={{ width: '200px', height: '150px' }} />
                <div className="header">
                    <h1>SmartGram</h1>
                    
                     {/* <div>Government of Madhya Pradesh</div>  */}
                     <p>Government of Madhya Pradesh</p>
                    
                </div>
                {/* <FontAwesomeIcon icon={faUser } className="profile-icon" /> */}
            </div>

            {/* Navigation Section */}
            <div className="nav">
            <span><Link to="/">Logout</Link></span>
                <span><Link to="/notification">Notifications</Link></span>
                {/* <span>User Details</span>
                <span>Logout</span> */}
            </div>
        </div>


      <div className='cardcomplete'>
    <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/jSz18NJ12mqBC1pYAbDOVMny6dgpjunxEyIexPBKZsrclpzJA.jpg" alt="People discussing in a meeting" />
        <div className="card-content">
          <h2>Ward Entries</h2>
          <p> Manage and update ward details efficiently with quick access to all entries.</p>
          {/* <Link to="/admindash" className="btn">Register now</Link> */}
          <Link to="/wardentry" className="btn">Manage</Link>
        </div> </div>

        <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/PtxNCbSKDDL0PlJiG4BDqPNooedCW8gviHAwu7Hse1ftVmOnA.jpg" alt="Electricity poles at sunset" />
        <div className="card-content">
          <h2>View all Connections</h2>
          <p>View and manage all active connections across wards easily.</p>
          <Link to="/applications" className="btn">View</Link>
        </div>
      </div>

      {/* <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/PtxNCbSKDDL0PlJiG4BDqPNooedCW8gviHAwu7Hse1ftVmOnA.jpg" alt="Documents and charts on a table" />
        <div className="card-content">
          <h2>Check Ward Expenses</h2>
          <p> Track and manage all ward-related expenses efficiently.</p>
         <Link to="/wardexp" className="btn">Check</Link>
        </div>
      </div> */}

      <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/kBeORvZJZQVtEC0MrAekUlBM5a0rKNgTQNBMRm0wvHD0KTnTA.jpg" alt="Electricity poles at sunset" />
        <div className="card-content">
          <h2>View Complaints</h2>
          <p>Track and review all submitted complaints for quick resolution.</p>
          <Link to="/displaycomplaint" className="btn">View</Link>
        </div>
      </div>

</div>


      {/* <div className="footer">
      <div className="contact-info">
        <p>Contact Us: 0731-2456872</p>
        <p>Email: smartgram@mp.gov.in</p>
      </div>
      <p>@2024 SmartGram Portal Government of Madhya Pradesh | All Rights Reserved</p>
    </div> */}
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
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/notification'>Notifications</Link></li>
         {/* <li><a href='#aboutUs'>Achievments</a></li> */}
        </ul>
        </div>

        <div className='contact-col1'>
        <h3>Contact Us</h3>
        <ul>
        <li>Panchayat & Rural Development Dept, M.P.</li>
        <li>Contact Us: 0731-2456872</li>
        <li>Email: smartgram@mp.gov.in</li>
        
        {/* <li ><div><FaPhoneAlt /></div>
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

    </div>
     
      
    </div>
  );
}
export default ADashboard;

// ReactDOM.render(<App />, document.getElementById('root'));