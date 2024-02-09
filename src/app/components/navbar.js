'use client';

const NavBar = () => {
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="/airbnb.png" alt="Airbnb Logo"/>
            </div>
            <div class="nav-buttons">
                <button class="login-button">Login</button>
                <button class="signup-button">Sign Up</button>
            </div>
        </nav>
    )
        
};

export default NavBar;