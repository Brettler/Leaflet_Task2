import {useState} from 'react';

/* This function allows users to add friends by clicking on a designated icon, which opens a modal where they can enter
* the username of the friend they want to add. If the username is not registered or is already on the friend list, an
* error message will be displayed. However, if the input is valid, the friend will be added to the list on the
* left-hand side of the page. The friend's display name and profile picture will be displayed in the appropriate list
* item. */
function AddFriend({setContactsList}) {
    const [friendUsername, setFriendUsername] = useState('');
    const [addFriendErrorMessage, setAddFriendErrorMessage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function addFriendRequest(username) {
        // get token from local storage
        const userToken = localStorage.getItem('token');

        const response = await fetch('/api/Chats', {
            'method': 'post',
            'headers': {
                'Content-Type': 'application/json',
                "authorization": 'Bearer ' + userToken,
            },
            'body': JSON.stringify({ username: username })
        });

        if (response.ok) {
            const friendUser = await response.json();
            return friendUser;
        } else {
            if (response.status === 400) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            } else {
                throw new Error('No user with this name exists.');
            }
        }
    }

    // Search the list of registered users for the user with the matching username.
    async function handleAddFriend() {
        setAddFriendErrorMessage(null);
        if (!friendUsername) {
            setAddFriendErrorMessage('Please enter a username.');
            return;
        }

        // Add the new friend to the list of the user's friends.
        try {
            const friendUser = await addFriendRequest(friendUsername);

            setContactsList((prevContacts) => {
                return [...prevContacts, friendUser];
            });

            setIsModalOpen(false);
        } catch (error) {
            setAddFriendErrorMessage(error.message);
        } finally {
            setFriendUsername('');

        }
    }

    // Prevent clicking 'enter' from refreshing the page.
    function handleFormSubmit(e) {
        e.preventDefault();
        handleAddFriend();

    }

    // Clear the modal's input box.
    function handleOpenModal() {
        setIsModalOpen(true);
        setFriendUsername('');
    }

    // Clear the modal's error message.
    function handleCloseModal() {
        setIsModalOpen(false);
        setAddFriendErrorMessage(null);
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
                    {isModalOpen && addFriendErrorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {addFriendErrorMessage}
                        </div>
                    )}
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={handleCloseModal}>Close</button>
                <button type="button" form="add-friend" id="add-friend-btn" className="btn btn-success"
                        onClick={() => { handleAddFriend(); handleOpenModal(); }}>Add Friend</button>
            </div>
        </>
    );
}

export default AddFriend;