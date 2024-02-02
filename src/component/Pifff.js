import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken, setAuthHeaders } from '../service/auth'; // Import the utility function

const HomeSucc = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = getAccessToken();
  
        if (accessToken) {
          const axiosInstance = axios.create();
          setAuthHeaders(axiosInstance);
  
          const response = await axiosInstance.get('http://localhost:8080/customer/deposit-history/');
  
          // Log the response data to the console
          console.log('Response Data:', response.data);
  
          // Set the response data in state to display in the browser
          setResponseData(response.data);
        } else {
          // Handle case when access token doesn't exist
          console.log('Access token not found');
        }
      } catch (error) {
        // Handle error if request fails
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {responseData.length > 0 ? (
        <ul>
          {responseData.map((record, index) => (
            <li key={index}>
              Amount: {record.amount !== null ? record.amount : 0}, 
              Date: {record.date !== null ? record.date : 'nothing exists'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No deposit history available.</p>
      )}
    </div>
  );
  
        }

export default HomeSucc;
