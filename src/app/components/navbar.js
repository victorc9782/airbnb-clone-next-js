'use client';
import React, { useState, useEffect } from 'react';
import SignupModal from "./modal/signUpModal";
import LoginModal from "./modal/loginModal";

const NavBar = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    // Check local storage for login status on component mount
    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        const storedUserEmail = localStorage.getItem("userEmail");
        const storedUserPassword = localStorage.getItem("userPassword");
        if (storedUserName && storedUserEmail && storedUserPassword) {
            setUserName(storedUserName);
            setUserEmail(storedUserEmail);
            setUserPassword(storedUserPassword);
        }
    }, []);

    const openSignupModal = () => {
        setShowSignupModal(true);
    };
    
    const closeSignupModal = () => {
        setShowSignupModal(false);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const handleSignupSubmit = (formData) => {
        // Handle the form submission here
        setUserName(formData.name);
        setUserEmail(formData.email);
        setUserPassword(formData.password);
        localStorage.setItem("userName", formData.name); // Store the user name in local storage
        localStorage.setItem("userEmail", formData.email); // Store the user email in local storage
        localStorage.setItem("userPassword", formData.password); // Store the user password in local storage
        localStorage.setItem("lastLoginUserName", formData.name); 
        localStorage.setItem("lastLoginUserEmail", formData.email);
        localStorage.setItem("lastLoginUserPassword", formData.password);
        closeSignupModal(); // Close the modal after form submission
    };

    const handleLoginSubmit = (formData) => {
        // Handle the login form submission here
        // You can perform authentication or any other necessary logic
        // based on the form data
        console.log("Login form submitted with data:", formData);
        const lastLoginUserName = localStorage.getItem("lastLoginUserName");
        const lastLoginUserEmail = localStorage.getItem("lastLoginUserEmail");
        const lastLoginUserPassword = localStorage.getItem("lastLoginUserPassword");
        if ( lastLoginUserName 
            && lastLoginUserEmail 
            && lastLoginUserPassword 
            && lastLoginUserEmail == formData.email
            && lastLoginUserPassword == formData.password
        ){
            localStorage.setItem("userName", lastLoginUserName); 
            localStorage.setItem("userEmail", lastLoginUserEmail);
            localStorage.setItem("userPassword", lastLoginUserPassword);

            setUserName(lastLoginUserName);
            setUserEmail(lastLoginUserEmail);
            setUserPassword(lastLoginUserPassword);

            // Close the modal after form submission
            closeLoginModal();
        } else {
            alert("Wrong email or password");
        }
    };

    const handleSignOut = () => {
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        localStorage.removeItem("userName"); // Remove the user name from local storage
        localStorage.removeItem("userEmail"); // Remove the user email from local storage
        localStorage.removeItem("userPassword"); // Remove the user password from local storage
    };
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="/airbnb.png" alt="Airbnb Logo"/>
            </div>
            {userName ? (
                <div className="signed-in nav-buttons items-center">
                    <span className="user-name">{userName}</span>
                    <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
                </div>
                ) : (
            <div class="nav-buttons">
                <button class="login-button" onClick={openLoginModal}>Login</button>
                <button class="signup-button" onClick={openSignupModal}>Sign Up</button>
            </div>
                )}
            {showSignupModal && <SignupModal onClose={closeSignupModal} onSubmit={handleSignupSubmit}/>}
            {showLoginModal && <LoginModal onClose={closeLoginModal} onSubmit={handleLoginSubmit}/>}
        </nav>
    )
        
};

export default NavBar;