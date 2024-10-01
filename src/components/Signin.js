import React, { useState } from 'react';
import './Signin.css'; // Import CSS for styling

const Signin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center">{isLogin ? 'Login Form' : 'Signup Form'}</h2>
        <div className="toggle-buttons">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
        </div>

        <form className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <input type="text" placeholder="Username" className="input-field" />
            </div>
          )}
          <div className="input-group">
            <input type="email" placeholder="Email Address" className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          {isLogin ? (
            <div className="forgot-password">
              <a href="/">Forgot password?</a>
            </div>
          ) : (
            <div className="input-group">
              <input type="password" placeholder="Confirm Password" className="input-field" />
            </div>
          )}

          <button className="submit-button">{isLogin ? 'Login' : 'Signup'}</button>

          {isLogin ? (
            <div className="signup-prompt">
              Create an account <a href="#" onClick={toggleForm}>Signup now</a>
            </div>
          ) : (
            <div className="login-prompt">
              Already have an account? <a href="#" onClick={toggleForm}>Login now</a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;
