
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Landing from "./components/Landing/Landing.js";
import Adashboard from "./components/admindash1/admindash.js";
import Login from "./components/signup/Login.js";
import Alogin from "./components/signup/adminlogin.js";
import Register from "./components/signup/register.js";
import Userdash from "./components/userdash/userdash.js";
import ComplaintList from "./pages/complaints/displaycomplaint.js";
import RegisterComplaint1 from "./pages/complaints/trycomplaint.js";
import MyComplaints from "./pages/myComplaints/myComplaint.js";
import NotificationList from "./pages/notification/notificationlist.js";
import NotificationForm from "./pages/notification/notiform.js";
import Schemes from "./pages/schemes/schemes.js";
import ApplicationList from './pages/services/Applicationlist';
import NewConnectionApplication from "./pages/services/connection.js";
import Displayward from "./pages/wardentry/displayward.js";
import NewWardEntry from "./pages/wardentry/wardentry.js";

function App() {
  return (
    
    <div className="App">
    
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Landing/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/userdash" element={<Userdash/>} /> 
        <Route path="/adminlogin" element={<Alogin/>} /> 
        <Route path="/admindash" element={<Adashboard/>} /> 
        <Route path="/connection" element={<NewConnectionApplication/>} /> 
        <Route path="/applications" element={<ApplicationList />} />
        <Route path="/complaint" element={<RegisterComplaint1 />} />
        <Route path="/wardentry" element={<NewWardEntry />} />
        <Route path="/displayward" element={<Displayward />} />
        <Route path="/notification" element={<NotificationForm />} />
        <Route path="/notificationlist" element={<NotificationList />} />
        <Route path="/displaycomplaint" element={<ComplaintList/>} />
        <Route path="/schemes" element={<Schemes/>} /> 
        <Route path="/mycomplaint" element={<MyComplaints/>} /> 

        </Routes>  
       </BrowserRouter>
    </div>
  );
}

export default App;




