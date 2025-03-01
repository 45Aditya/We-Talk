import Header from "./components/Header"; 
import logo from './assests/logo.jpg';
import authservice from "./appwrite/auth";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await authservice.getCurrentUser();
        setIsLoggedIn(!!response); 
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLoggedIn(false);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <div>
      <Header />
      {!isLoggedIn ? (
        <img src={logo} alt="We Chat Logo" className="logo" />
      ) : (
        <p>Welcome</p>
      )}
    </div>
  );
}

export default App;
