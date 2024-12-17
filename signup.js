import React, { useState } from "react";
import './styles.css';  // Import the CSS file

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Handle sign-up logic here
      console.log("Sign-Up details:", { username, email, password });
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Cattle Health Portal</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>

      <footer>
        <p>&copy; 2024 Cattle Health Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
