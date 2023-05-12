import {useState} from 'react';

function AddFriend({userInfo, usersRegisterList}) {
    const [friendName, setFriendName] = useState('');

    function handleAddFriend() {
        // Find the user with the inputted friend name
        const friendUser = usersRegisterList[friendName];

        // If no such user exists, return
        if (!friendUser) {
            console.log('No user with this name exists.');
            return;
        }
        // If no such user exists, return
        if (friendUser === userInfo.registerUsername) {
            console.log("You can't add yourself");
            return;
        }

        // Find the current user in the usersRegisterList and add the friend to their friendsList
        const updatedUsers = function () {
            // Check if friend already exists in the user's friendsList
            if (userInfo.friendsList.some(friend => friend.registerUsername === friendName)) {
                console.log('This user is already your friend.');
                return userInfo;
            } else {
                // Add friend to the user's friendsList
                return {...userInfo, friendsList: [...userInfo.friendsList, friendUser]};
            }
        };
    }

    return (
        <>
            <div className="modal-body">
                <form id="add-friend">
                    <div className="mb-3">
                        <input type="text" value={friendName} className="form-control" id="friendName"
                               onChange={(e) => setFriendName(e.target.value)}
                               placeholder="Friend's username"/>
                    </div>
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
