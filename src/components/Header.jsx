import React, { useState, useEffect } from "react";
import Button from "./Button";
import authservice from "../appwrite/auth";
import "./Header.css"; 

function Header() {
    const [status, setStatus] = useState(false); 

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await authservice.getCurrentUser();
                if (response) {
                    setStatus(true);
                } 
            } catch (error) {
                console.error("Error checking auth status:", error);
                setStatus(false);
            }
        };

        checkAuthStatus();
    }, []);

    return (
        <div className="header-container">
            <div>
                <p className="header-title">Just Talk</p>
            </div>
            <div className="header-buttons">
                <Button buttonText="Home" />
                {!status ? (
                    <>
                        <Button buttonText="Login" />
                        <Button buttonText="SignUp" />
                    </>
                ) : (
                    <Button buttonText="Logout" />
                )}
            </div>
        </div>
    );
}

export default Header;
