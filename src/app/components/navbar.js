'use client';
import React, { useState } from 'react';
import SignupModal from "./modal/signUpModal";

const NavBar = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const openSignupModal = () => {
        setShowSignupModal(true);
    };
    
    const closeSignupModal = () => {
        setShowSignupModal(false);
    };
    const handleSignupSubmit = (formData) => {
        // Handle the form submission here
        setUserName(formData.name);
        setUserEmail(formData.email);
        setUserPassword(formData.password);
        closeSignupModal(); // Close the modal after form submission
    };
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="/airbnb.png" alt="Airbnb Logo"/>
            </div>
            {userName ? (
                <span className="user-name">{userName}</span>
                ) : (
            <div class="nav-buttons">
                <button class="login-button">Login</button>
                <button class="signup-button" onClick={openSignupModal}>Sign Up</button>
            </div>
                )}
            {showSignupModal && <SignupModal onClose={closeSignupModal} onSubmit={handleSignupSubmit}/>}
        </nav>
    )
        
};

export default NavBar;