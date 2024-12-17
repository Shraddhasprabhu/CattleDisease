import React from "react";
import "./styles.css"; // Ensure your CSS is correctly linked or migrated

const CattleDiseasePortal = () => {
  return (
    <div>
      <header>
        <div className="logo">MooCare</div>
        <nav>
          <a href="/">Home</a>
          <a href="/diseases">Diseases</a>
          <a href="/prevention">Prevention</a>
          <a href="/contact">Contact</a>
          <a href="/cattle">Cattle Disease</a>
        </nav>
      </header>

      <div className="hero">
        <h1>Welcome to the Cattle Disease Portal</h1>
        <p>Your trusted source for information on cattle health and disease prevention.</p>
      </div>

      <div className="container">
        <div className="form-group">
          <button onClick={() => (window.location.href = "/login")}>Login</button>
          <button onClick={() => (window.location.href = "/signup")}>Signup</button>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 Cattle Disease Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CattleDiseasePortal;
