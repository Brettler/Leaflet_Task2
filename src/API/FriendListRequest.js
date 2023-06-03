

async function FriendListRequest(userToken) {
    try {
        const response = await fetch("http://localhost:5000/api/Chats", {
            'method': "get",
            'headers': {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + userToken
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Friends data received from server: ", data);
            return data;
        } else {
            console.error("Error status: ", response.status);
        }

    } catch (error) {
        console.error('Fetch friends error:', error);
    }

    return null;
}

export default FriendListRequest;
