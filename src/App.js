// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import custom Landing_Page component
import LandingPage from './Components/LandingPage/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import AppointmentBooking from './Components/AppointmentBooking/AppointmentBooking';
import ReviewForm from './Components/ReviewForm/ReviewForm';


// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Display Notification component */}
          <Notification>
            {/* Set up the Routes for different pages */}
            <Routes>
              {/* Define individual Route components for different pages */}
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/signup" element={<Sign_Up/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path="/appointment-booking" element={<AppointmentBooking />} />
              <Route path="/notification" element={<Notification/>}/>
              <Route path="/reviews" element={<ReviewForm/>}/>
            </Routes>
            
          </Notification>

        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;