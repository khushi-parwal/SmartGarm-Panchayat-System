import { React } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/pas_logo.png';
import './schemes.css';

const Schemes=() => {
    return (
        <div className='com-page'>
   <div className='combine'>
    <div className='logo'>
   <img src={logo} alt='#' style={{width:'200px',height:'150px'} }/>

    <div className="header">
      <h1>SmartGram</h1>
      <div>Government of Madhya Pradesh</div> </div></div>
      
      <div className="nav">
        <span><Link to="/">Home</Link></span>
      </div>
  </div>

   <div className='schemes-detail'>
    <div className='sch-content'>
        <h1>"The Pradhan Mantri Gram Sadak Yojana (PMGSY)"</h1>
        <span>The Pradhan Mantri Gram Sadak Yojana (PMGSY), was launched by the Govt. of India to provide connectivity to unconnected Habitations as part of a poverty reduction strategy. Govt. of India is endeavoring to set high and uniform technical and management standards and facilitating policy development and planning at State level in order to ensure sustainable management of the rural roads network.
        </span>
        <h2>Visit Site:
        <Link to="https://omms.nic.in/">https://omms.nic.in/</Link></h2>
    </div>
    <div className='sch-content'>
        <h1>"Pradhan Mantri Awas Yojana-Gramin (PMAY)"</h1>
        <span>To address the gaps such as nonassessment of housing The shortage, lack of transparency in selection of beneficiaries, low the quality of the house and lack of technical supervision, lack convergence, loans not availed by beneficiaries 
        in the rural housing program and in view of Government’s commitment to providing “Housing for All’’ by the scheme 2024, 
        the of has IAY has been re-structured into Pradhan Mantri Awaas Yojana –Gramin (PMAY-G) w.e.f. 1st April 2016.
        PMAY-G aims at providing a pucca house, with basic amenities, to all houseless householder and those households living in kutcha and dilapidated house, by 2024. The immediate the objective is to cover 1.00 crore household living in kutcha house/dilapidated house in three years from 2016-17 to 2018- 19.
        </span>
        <h2>Visit Site:
        <Link to="https://pmayg.nic.in/netiayHome">https://pmayg.nic.in/netiayHome</Link></h2>
    </div>
    <div className='sch-content'>
        <h1>"Pradhan Mantri Kisan Samman Nidhi Scheme"</h1>
        <span>The Schemes which are running for the welfare of farmers in the country is enclosed in Annexure I.
The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN), a Central Sector Scheme, aims at providing financial assistance to all cultivable landholding farmer families across the country, subject to certain exclusion criteria. Under the Scheme, an amount of Rs. 6000/- is transferred annually in three equal installments of Rs.2000/- directly into the Aadhaar Seeded bank accounts of the farmers.
A farmer-centric digital infrastructure has ensured the benefits of the scheme reach all the farmers across the country without any involvement of the middlemen, maintaining absolute transparency in registering and verifying beneficiaries. The Government of India has disbursed over Rs 2.60 Lakhs Crores to more than 11 Cr farmers.
</span>
<h2>Visit Site:
        <Link to="https://pmkisan.gov.in/">https://pmkisan.gov.in/</Link></h2>
    </div>
    <div className='sch-content'>
        <h1>"PM Surya Ghar: Muft Bijli Yojana"</h1>
        <span>
PM Surya Ghar: Muft Bijli Yojana is a government scheme that aims to provide free electricity to households in India. The scheme was launched by Prime Minister Narendra Modi on February 15, 2024. Under the scheme, households will be provided with a subsidy to install solar panels on their roofs. The subsidy will cover up to 40% of the cost of the solar panels. The scheme is expected to benefit 1 crore households across India. It is estimated that the scheme will save the government Rs. 75,000 crore per year in electricity costs.
</span>
<h2>Visit Site:
        <Link to="https://www.myscheme.gov.in/schemes/pmsgmb">https://www.myscheme.gov.in/schemes/pmsgmb</Link></h2>
    </div>
   </div>
   
   </div>

    );
};

export default Schemes;
   