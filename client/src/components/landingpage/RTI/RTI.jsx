
import React from "react";
// Import React Leaflet components:
import rti from '../../../assests/rti.jpg';
import './RTI.css';

const position = [25.222681, 55.281985]

const Rti = () => {
    return (
      <div className="complete-rti">
        <div className="Locations" id="Rti">
          <h1 className="text-center">Right To Information</h1>
          <div className="locations-text">
          Right to Information Act 2005 mandates timely response to citizen requests for government information. It is an initiative taken by Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide a– RTI Portal Gateway to the citizens for quick search of information on the details of first Appellate Authorities,PIOs etc. amongst others, besides access to RTI related information / disclosures published on the web by various Public Authorities under the government of India as well as the State Governments
          The RTI Act also provides a portal for citizens to search for information and access RTI-related disclosures published by public authorities</div>
          <div className="rti">
          <img src={rti}  style={{width:'550px',height:'350px'}}/>
          </div>
          {/* <div className="map-container">
            <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  OllieBites <br /> Dubai.
                </Popup>
              </Marker>
            </MapContainer>
          </div> */}
        </div></div>
    );
};
export default Rti;
