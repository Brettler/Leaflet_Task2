import {useState} from 'react';

/* This function allows users to add friends by clicking on a designated icon, which opens a modal where they can enter
* the username of the friend they want to add. If the username is not registered or is already on the friend list, an
* error message will be displayed. However, if the input is valid, the friend will be added to the list on the
* left-hand side of the page. The friend's display name and profile picture will be displayed in the appropriate list
* item. */
function AddFriend({userInfo, usersRegisterList, setUsersRegisterList}) {
    const [friendUsername, setFriendUsername] = useState('');
    const [addFriendErrorMessage, setAddFriendErrorMessage] = useState(null);

    // Search the list of registered users for the user with the matching username.
    function handleAddFriend() {
        setAddFriendErrorMessage(null);
        const friendUser = usersRegisterList[friendUsername];

        // If the username entered is not found in the registered users list, an error will be displayed.
        if (!friendUser) {
            setAddFriendErrorMessage('No user with this name exists.');
            return;
        }

        // Verify if the friend already exists in the user's list of friends.
        if (userInfo.friendsList.some(friend => friend.registerUsername === friendUsername)) {
            setAddFriendErrorMessage('This user is already your friend.');

        // Add the new friend to the list of the user's friends.
        } else {
            const updatedUser = {
                ...userInfo,
                friendsList: [...userInfo.friendsList, friendUser],
                friendsInfo: {
                    ...userInfo.friendsInfo, [friendUsername]: {
                        day_time: "",
                        last_msg: "",
                    }
                },
                chatHistory: {
                    ...userInfo.chatHistory,
                    [friendUsername]: []
                }
            };

            // Update the 'usersRegisterList' in the parent component.
            setUsersRegisterList(prevFriendList => {
                return {...prevFriendList, [userInfo.registerUsername]: updatedUser};
            });
        }
    }

    // Prevent clicking 'enter' from refreshing the page.
    function handleFormSubmit(e) {
        e.preventDefault();
        handleAddFriend();
    }

    // The modal structure.
    return (
        <>
            <div className="modal-body">
                <form id="add-friend" onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <input type="text" value={friendUsername} className="form-control" id="friendName"
                               onChange={(e) => setFriendUsername(e.target.value)}
                               placeholder="Enter friend's username here"/>
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
                <button type="button" form="add-friend" id="add-friend-btn" className="btn btn-success"
                        data-bs-dismiss="modal" onClick={handleAddFriend}>Add Friend
                </button>
            </div>
        </>
    );
}

export default AddFriend;