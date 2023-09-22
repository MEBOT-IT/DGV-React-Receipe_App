import React,{ useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export let user = '';
function Login({ updateWelcomeMessage }) {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, perform sign-up 
      alert('Form submitted:', formData);
      navigate("/");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const [formData1, setFormData1] = useState({
    username: '',
    password: '',
  });

  const [errors1, setErrors1] = useState({
    username: '',
    password: '',
  });

  // Function to handle login form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData1({
      ...formData1,
      [name]: value,
    });
  };

   //  welcome message
  const [WelcomeMessage, setWelcomeMessage] = useState('');

  // Function - login form submission
  const handleloginSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const loginnewErrors = {};
    if (formData1.username.trim() === '') {
      loginnewErrors.username = 'Username is required';
    }
    if (formData1.password.trim() === '') {
      loginnewErrors.password = 'Password is required';
    }

    if (Object.keys(loginnewErrors).length > 0) {
      setErrors1(loginnewErrors);
      setWelcomeMessage(''); // Clear welcome message if there are errors
    } else {
      // If no errors, set the welcome message
      //setWelcomeMessage('Welcome User: ' + formData1.username);
      user = {WelcomeMessage};
      console.log(user);
      const welcomeMessage = 'Welcome, ' + formData1.username;
      updateWelcomeMessage(welcomeMessage);
      navigate('/');
      // setIsUser(true);
      
    }
  };
  const [isLoggedIn,setisLoggedIn] = useState(false);
    const handleClick = () => { 
        setisLoggedIn(!isLoggedIn)
        }
 

  return (
    <div className='login-container'>
    <div className={`login-wrapper ${isSignUp ? 'animated-signin' : 'animated-signup'}`}>
    <div class="form-container sign-up">
      <form onSubmit={handleSubmit} >
      <p id='signup-header'>Sign up</p>
        <div class="form-group">
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
          <label  htmlFor="fullName">username</label>
          <i class="fas fa-user"></i><br></br>
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div class="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
          <label for="">email</label>
          <i class="fas fa-at"></i>
          <br></br>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div class="form-group">
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
          <label htmlFor="password">password</label>
          <i class="fas fa-lock"></i>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div class="form-group">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirmPassword">confirm password</label>
          <i class="fas fa-lock"></i>{errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
        </div>
        <button type="submit" class="btn">sign up</button>
        <div class="link">
          <p id='noacc-link'>You already have an account?<a className={`signin-link ${!isSignUp ? 'active' : ''}`} 
          onClick={handleSignInClick}>sign in</a></p>
        </div>
      </form>
    </div>
    <div class="form-container sign-in">
      <form onSubmit={handleloginSubmit}>
      <p id='login-header'>Login</p>
        <div class="form-group">
        <input
            type="text"
            name="username"
            value={formData1.username}
            onChange={handleInputChange}
            required
          />
          <i className="fas fa-user"></i>
          <label htmlFor="username">Username</label>
          <p className="error">{errors1.username}</p> {/* Display username error */}
        </div>
        <div class="form-group">
        <input
            type="password"
            name="password"
            value={formData1.password}
            onChange={handleInputChange}
            required
          />
          <i className="fas fa-lock"></i>
          <label htmlFor="password">Password</label>
          <p className="error">{errors1.password}</p> {/* Display password error */}
        </div>
        <div class="forgot-pass">
          <a href="#">forgot password?</a>
        </div>
        <button type="submit" class="btn" onClick={(handleClick)}>login</button>
        <div class="link">
          <p >Don't have an account?<a className={`signup-link ${isSignUp ? 'active' : ''}`} onClick={handleSignUpClick}> sign up</a></p>
        </div>
        
      </form>
    </div>
    {/* <p id='welcome'>{welcomeMessage && <div className="welcome-message">{welcomeMessage}</div>}</p> */}
  </div>
    </div>
    
  )
}
export default Login;