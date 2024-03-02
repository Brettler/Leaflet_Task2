import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
//import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';

// const useUserDataRequest = (userValidInfo, setUserData, setIsLoading) => {
    
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(false); // Add an error state
//     const navigate = useNavigate(); // Hook for programmatic navigation

//     useEffect(() => {
//         const fetchData = async () => {
//             if (!userValidInfo) {
//                 setError(true);
//                 setIsLoading(false);
//                 return; // Exit if userValidInfo is not set
//             }



//             try {
//                 setIsLoading(true);
//                 const userToken = localStorage.getItem('token');

//                 const response = await fetch(`api/Users/${userValidInfo}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         "Authorization": 'Bearer ' + userToken,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const userInformation = await response.json();
//                 setUserData(userInformation);
//                 setError(false); // Reset error state on successful fetch
//             } catch (error) {
//                 console.error('Error:', error);
//                 setError(true); // Set error state on failure
//                 navigate('/'); // Redirect to login on error

//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, [ userValidInfo, navigate]);

//     return { isLoading, error }; // Return the error state
// };

// export default useUserDataRequest;




export const useUserDataRequest = (usernameValidInfo) => {

    const [userData, setUserData] = useState(null);
    const navigate = useNavigate(); // Hook for programmatic navigation
    const userToken = localStorage.getItem('token'); // get token from local storage


    useEffect(() => {
        const fetchData = async () => {

            if(!usernameValidInfo) {
                navigate('/');
                return;
            }

            try {
                // Use a template string to insert the username into the URL.
                const response = await fetch(`api/Users/${usernameValidInfo}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": 'Bearer ' + userToken,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userInformation = await response.json();
                setUserData(userInformation);

            } catch (error) {
                console.error('Error:', error);
                navigate('/') // Back to the login page
            }
        };

        fetchData();
        

    }, [userToken, navigate, usernameValidInfo, setUserData]);

    return userData;
}