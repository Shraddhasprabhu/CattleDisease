import React, { useState } from "react";
import "./styles.css"; // Ensure the CSS is correctly linked

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, like calling an API
    console.log("Login submitted:", email, password);
  };

  return (
    <div>
      <header>
        <h1>Cattle Health Portal</h1>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Cattle Health Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
