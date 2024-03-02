import {useEffect, useState} from "react";

async function deleteChat(chatId) {
    try {
        const userToken = localStorage.getItem('token');
        const response = await fetch(`/api/Chats/${chatId}`, {
            'method': 'DELETE',
            'headers' : {
                'Content-Type': 'application/json',
                "authorization": 'Bearer ' + userToken,
            },
        });

        if (response.ok) {
            try {
                const message = await response.json();
                console.log('Successful delete: ', message);
                return message;
            } catch (err) {
                console.error("Failed to parse response body", err);
            }
        } else if (response.status === 404) {
            console.log('Chat not found');
            return null;
        } else if (response.status === 403) {
            console.log('Not authorized to delete chat');
            return null;
        } else {
            throw new Error('Failed to delete chat');
        }
    } catch (error) {
        console.error('Error deleting chat: ', error);
        throw error;
    }
}


/* If the user has not clicked on a friend chat yet, the top right bar will remain blank. Otherwise, it will display
* the details of the friend such as their display name and profile picture.  */
function ProfileFriend({currentFriend, contactsList, setRefreshNeeded, setCurrentFriend}) {
    // deleting state could be used to show a loading spinner or disable the "Delete Chat" button
    // to prevent the user from initiating another delete operation while one is still in progress.
    //const [deleting, setDeleting] = useState(false);

    const [isEmptyContactList, setIsEmptyContactList] = useState(true);

    // chatDeleted will be used to show the correct message after the user deleted a chat.

    const [chatDeleted, setChatDeleted] = useState(false);
    useEffect(() => {
        if (contactsList.length > 0) {
            setIsEmptyContactList(false);
        } else {
            setIsEmptyContactList(true);
        }
    }, [contactsList]);



    if(isEmptyContactList && chatDeleted) {
        return(
            <div className="header">
                <div className="user_image">
                    <img src="/fall.JPG" className="cover" alt=""/>
                </div>
                <div className="user_name">All chats have been deleted, feel free to create new ones</div>
            </div>
        )
    }

    // No friend has been selected yet.
    if (!currentFriend && !chatDeleted) {
        return (
            <div className="header">
                <div className="user_image">
                    <img src="/fall.JPG" className="cover" alt=""/>
                </div>
                <div className="user_name">Welcome! To get started, add friends to chat with by clicking on the 'Add Friend' icon.</div>
            </div>
        );
    } else if(!currentFriend && chatDeleted) {
        return(
            <div className="header">
                <div className="user_image">
                    <img src="/fall.JPG" className="cover" alt=""/>
                </div>
                <div className="user_name">This chat has been deleted, feel free to create new ones or visit different ones</div>
            </div>
        )
    }

    // contactsList is an array of objects, each representing a conversation.
    const friendInfo = contactsList.find(friend => friend.id === currentFriend.id);

    const handleDeleteChat = async () => {
        //setDeleting(true);
        try {
            await deleteChat(friendInfo.id);
            setCurrentFriend(null);
            // Perform any necessary UI updates after successful deletion -> Requesting the new friendlist from the server.
            setRefreshNeeded(prevState => !prevState);  // Toggle refreshNeeded state -> request again the update friend list.
            setChatDeleted(true); // update state when chat is deleted

        } catch (error) {
            // Handle the error or show an error message
            console.error('Error deleting chat: ', error);
        }
        // } finally {
        //     //setDeleting(false);
        // }
    };


    // Display the details of the selected friend.
    return (
        <div className="header">
            <div className="user_image">
                <img src={friendInfo.user.profilePic} className="cover" alt=""/>
            </div>
            <div className="user_name">
                {friendInfo.user.displayName}<br/>
                <span>online</span>
            </div>

            {/* <ul className="icons">
                <i className="bi bi-trash2 delete_chat_icon" data-toggle="tooltip" data-placement="bottom"
                   title="Delete Chat" onClick={handleDeleteChat}/>
            </ul> */}

        </div>
    );
}

export default ProfileFriend;