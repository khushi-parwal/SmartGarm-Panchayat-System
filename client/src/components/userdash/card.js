import React from 'react';
import { Link } from "react-router-dom";

const Card= () => {
  return (
    <div className='cardcomplete'>
    <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/g8YkvNjwE17KKlR31x5qLkJD8by52guJDh8gyg2FmfWodpzJA.jpg" alt="People discussing in a meeting" />
        <div className="card-content">
          <h2>Register Your Complaints</h2>
          <p>Easily report issues like road breakouts, water problems, electricity outage, sewage concerns, agriculture challenges or scholarship issues. Your voice matters!</p>
          {/* <Link to="/admindash" className="btn">Register now</Link> */}
          <a href="#" className="btn"><Link to="/complaint" >Register now</Link></a>
        </div> </div>

        <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/MmfqPQb2uxVjDCue3RpFuUUSkssXgjwRoGeu3WoMzfUOtLdOB.jpg" alt="Electricity poles at sunset" />
        <div className="card-content">
          <h2>Application</h2>
          <p>Submit your request for new water or electricity connections easily. Fill out the form and share your feedback to help us serve you better!</p>
          <a href="#" className="btn"><Link to="/connection">Apply Now</Link></a>
        </div>
      </div>

      <div className="card">
        <img src="https://storage.googleapis.com/a1aa/image/xpoe3CmTy1yCd6BAB8QpdaEg0XUUfDAUHHB7gGt18QFS7SnTA.jpg" alt="Documents and charts on a table" />
        <div className="card-content">
          <h2>Ward Details</h2>
          <p>Access your village's annual report, budget overview, and achievements to stay informed about local developments and progress.</p>
          <a href="#" className="btn"><Link to="/displayward">Ward Overview</Link></a>
        </div>
      </div>

</div>


      
       
        
  );
};
export default Card;