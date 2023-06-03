import { useEffect } from 'react';


function UserDataRequest({userValidInfo, setUserData}) {
    // get token from local storage
    const userToken = localStorage.getItem('token');
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use a template string to insert the username into the URL.
                console.log(userValidInfo)
                const response = await fetch(`http://localhost:5000/api/Users/${userValidInfo}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": 'Bearer ' + userToken,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const userInformation = await response.json();
                setUserData(userInformation)
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [userValidInfo, setUserData]);  // re-run effect when these values change

    return null;  // or return some JSX if needed
}

export default UserDataRequest;