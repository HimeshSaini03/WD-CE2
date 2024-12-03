// SellMyCar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SellMyCar.css";
import { AddCar } from "../components/Admin/AddCar";

const SellMyCar = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="sell-my-car">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </li>
          <li
            className={activeTab === "cars" ? "active" : ""}
            onClick={() => setActiveTab("cars")}
          >
            Your Cars
          </li>
        </ul>
      </div>

      <div className="content">
        {activeTab === "profile" && (
          <div className="profile">
            <h2>Update Profile</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" />

              <label>Phone</label>
              <input type="text" placeholder="Enter your phone" />

              <button type="submit">Update</button>
            </form>
          </div>
        )}

        {activeTab === "cars" && (
          <div className="your-cars">
            <h2>Your Cars</h2>
            <button >Add New Car</button>
            
            {/* Add logic to display user's cars */}
            <ul>
              <li>Car 1 - Details</li>
              <li>Car 2 - Details</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellMyCar;
