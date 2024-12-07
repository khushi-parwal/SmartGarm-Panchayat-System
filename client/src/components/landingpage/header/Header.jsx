import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { Container } from 'reactstrap';
import logo from '../../../assests/pas_logo.png';
import './Header.css';


const NavLinks = [
// {
//     display: 'Admin',
//     url: '#',
// },

// {
//     display: 'User',
//     url: '#userlogin',
// },


{
    display: 'About Us',
    url: '#about',
},
// {
//     display: 'RTI',
//     url: '#rti',
// },
{
    display: 'Contact Us',
    url: '#contact',
},
];

const Header = () => {

    const menuRef = useRef ();
    const menuToggle =()=> menuRef.current.classList.toggle('active-menu');

  return (
    <header className='header'>
        <Container>
            <div className='navigation'>
            <div className='logo-name'>
                <div className="logo">
                    <h5 className='d-flex align-items-center gap-0'>
                    <img src={logo}  style={{width:'200px',height:'150px',marginTop:'0px!important'}}/>

                 <div className='name'>
                    <div className="add-first">SmartGram</div>
                    <div className="add-second">Government Of Madhya Pradesh</div>
                </div>  
        
                    </h5></div>
                   
                </div>

                <div className="nav-menu" ref={menuRef}>
                    <div className='nav-list-wrapper d-flex align-items-center gap-5'>
                        <ul className="nav-list">
                            {
                                NavLinks.map((item,index)=>(
                                    <li className="nav-item" key={index}>
                                        <a href={item.url} onClick={menuToggle}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        
                        <div >
                        <ul className="nav-list">
                             <li className="nav-item"><NavLink to='/login'>User</NavLink></li>
                            </ul> 
                        </div> 
                        
                        <div>
                        <ul className="nav-list">
                             <li className="nav-item"><NavLink to='/adminlogin'>Admin</NavLink></li>
                            </ul> 
                        </div> 
                        
                        
                    </div>
                </div>
                

                <div className="mobile-menu">
                     <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header