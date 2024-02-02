// auth.js (updated)
const getAccessToken = () => {
    return localStorage.getItem('access_token');
  };
  
  const setAuthHeaders = (axiosInstance) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      axiosInstance.defaults.headers.common['Authorization'] = `JWT ${accessToken}`;
    } else {
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };
  
export { getAccessToken, setAuthHeaders };
  