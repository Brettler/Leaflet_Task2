// Import the necessary hooks from React
import { useEffect, useState } from 'react';

// Define the FriendListRequest function. This function takes one argument: the user's token.
 const FriendListRequest = (refreshNeeded) => {
     // get token from local storage
     const userToken = localStorage.getItem('token');
    // Initialize `loading` state variable to true. This will be used to track when we're done loading the data.
    const [loading, setLoading] = useState(true);

    // Initialize `friends` state variable to an empty array. This will hold the friends data once it is fetched.
    const [contacts, setContacts] = useState([]);

    // Use the useEffect hook to fetch the friends data when the component is mounted.
    useEffect(() => {
        // Define an asynchronous function inside the useEffect hook.
        const fetchFriends = async () => {
            try {
                // Fetch the data from the API endpoint.
                const res = await fetch('api/Chats', {
                    'method': 'get',
                    'headers': {
                        'Content-Type': 'application/json',
                        "authorization": 'Bearer ' + userToken,
                    },
                });
                // Parse the response data as JSON.
                const data = await res.json();

                // Update the `friends` state variable with the fetched data.
                setContacts(data);
            } catch (e) {
                // If an error occurred, log it to the console.
                console.log(e);
            } finally {
                // Regardless of success or failure, update the `loading` state variable to false because we're done loading.
                setLoading(false);
            }
        };
        // Call the fetchFriends function.
        fetchFriends();
    }, [userToken, refreshNeeded]); // We pass `userToken` as a dependency to useEffect, which means the effect will re-run if `userToken` changes.

    // Return the `loading` and `friends` state variables. These can be used by the parent component.
    return { contacts, loading };
}

export default FriendListRequest;
