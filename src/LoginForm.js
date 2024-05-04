import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
