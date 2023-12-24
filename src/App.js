import React, { useEffect } from 'react';
import Routes from './routes'; // Import the Routes component
import { setAuthToken } from './helpers/setAuthToken';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

  useEffect(() => {
    // Check for JWT token in localStorage when the app starts
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token); // Set the token in Axios headers if it exists
    }
  }, []);

  return (
    <div className="App">
      {/* Wrap the Routes component with a Router */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}


export default App;
