import {useState} from 'react';

function AddFriend({userInfo, usersRegisterList, setUsersRegisterList}) {
    const [friendUsername, setFriendUsername] = useState('');
    const [addFriendErrorMessage, setAddFriendErrorMessage] = useState(null);

    function handleAddFriend() {
        // Find the user with the inputted friend name
        const friendUser = usersRegisterList[friendUsername];

        // If no such user exists, return
        if (!friendUser) {
            setAddFriendErrorMessage('No user with this name exists.');
            return;
        }
        // If no such user exists, return
        if (friendUser === userInfo.registerUsername) {
            setAddFriendErrorMessage("You can't add yourself");
            return;
        }

        // Check if friend already exists in the user's friendsList
        if (userInfo.friendsList.some(friend => friend.registerUsername === friendUsername)) {
            setAddFriendErrorMessage('This user is already your friend.');
        } else {
            // Add friend to the user's friendsList
            const updatedUser = {
                ...userInfo,
                friendsList: [...userInfo.friendsList, friendUser],
                friendsInfo: {
                    ...userInfo.friendsInfo, [friendUsername]: {
                        day_time: "", // The current time.
                        last_msg: "", // Initially, there's no last message
                    }
                },
                chatHistory: {
                    ...userInfo.chatHistory,
                    [friendUsername]: []
                }
            };

            // Update the usersRegisterList in the parent component
            setUsersRegisterList(prevFriendList => {
                return {...prevFriendList, [userInfo.registerUsername]: updatedUser};
            });
        }
    }

    return (
        <>
            <div className="modal-body">
                <form id="add-friend">
                    <div className="mb-3">
                        <input type="text" value={friendUsername} className="form-control" id="friendName"
                               onChange={(e) => setFriendUsername(e.target.value)}
                               placeholder="Friend's username"/>
                    </div>
                    {addFriendErrorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {addFriendErrorMessage}
                        </div>
                    )}
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success" onClick={handleAddFriend}>Add Friend</button>
            </div>
        </>
    )
        ;
}

export default AddFriend;
