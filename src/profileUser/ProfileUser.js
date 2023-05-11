import { useState } from "react";
import { Navigate } from "react-router-dom";

function ProfileUser() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    function handleLogout() {
        setIsLoggedIn(false);
    }

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className="header">
            <div className="user_image">
                <img src="fall.JPG" className="cover" alt=""/>
            </div>
            <div id="name" className="user_name">
                Ashleaf Maple
            </div>
            <ul className="icons">
                <i className="bi bi-door-closed logout_icon" onClick={handleLogout} />
                <i className="bi bi-person-add add_friend_icon" data-bs-toggle="modal" data-bs-target="#addFriendModal" />
            </ul>
            <div className="modal fade" id="addFriendModal" tabIndex={-1} aria-labelledby="addFriendModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addFriendModalLabel">Add Friend</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form id="add-friend">
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="friendName" placeholder="Enter friend's username" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;
