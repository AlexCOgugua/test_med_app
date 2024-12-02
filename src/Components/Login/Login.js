// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';


// const Login = () => {
//   return (
//     <div>
//         {/* Main container div for the page content */}
//     <div class="container">
//         {/* Div for login grid layout */}
//         <div class="login-grid">
//           {/* Div for login text */}
//           <div class="login-text">
//             <h2>Login</h2>
//           </div>
//           {/* Additional login text with a link to Sign Up page */}
//           <div class="login-text">
//             Are you a new member? <Link to='/signup'><span><a href="../Sign_Up/Sign_Up.html" style={{color: `{#2190FF}`}}> Sign Up Here</a></span></Link>
//           </div>
//           <br />
//           {/* Div for login form */}
//           <div class="login-form">
//             <form>
//               {/* Form group for email input */}
//               <div class="form-group">
//                 <label for="email">Email</label>
//                 <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email" aria-describedby="helpId" />
//               </div>
//               {/* Form group for password input */}
//               <div class="form-group">
//                 <label for="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   class="form-control"
//                   placeholder="Enter your password"
//                   aria-describedby="helpId"
//                 />
//               </div>
//               {/* Button group for login and reset buttons */}
//               <div class="btn-group">
//                 <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
//                 <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
//               </div>
//               <br />
//               {/* Additional login text for 'Forgot Password' option */}
//               <div class="login-text">
//                 Forgot Password?
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login




// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
const Login = () => {
  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  // Get navigation function from react-router-dom
  const navigate = useNavigate();
  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);
  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);
      // Redirect to home page and reload the window
      navigate('/');
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div>
        {/* Main container div for the page content */}
    <div className="container">
        {/* Div for login grid layout */}
        <div className="login-grid">
          {/* Div for login text */}
          <div className="login-text">
            <h2>Login</h2>
          </div>
          {/* Additional login text with a link to Sign Up page */}
          <div className="login-text">
            Are you a new member? <Link to='/signup'><span><a href="../Sign_Up/Sign_Up.html" style={{color: `{#2190FF}`}}> Sign Up Here</a></span></Link>
          </div>
          <br />
          {/* Div for login form */}
          <div className="login-form">
          <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/* Input field for email */}
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-describedby="helpId" 
                />
              </div>

              {/* Form group for password input */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
             </div>
              {/* Button group for login and reset buttons */}
              <div class="btn-group">
                <button type="submit" class="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <button type="reset" class="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
              <br />
              {/* Additional login text for 'Forgot Password' option */}
              <div class="login-text">
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
