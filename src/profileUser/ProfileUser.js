import {useState} from "react";
import {Navigate} from "react-router-dom";
import UserInfo from "./UserInfo";
import UserSettingOptions from "./UserSettingOptions";

/* This function implements the logout functionality. When the user clicks on the logout icon, they will be redirected
* to the login page.  */
function ProfileUser({userInfo, usersRegisterList, setUsersRegisterList}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // Set user to 'logged out'.
    function handleLogout() {
        setIsLoggedIn(false);
    }

    // Redirect the user to the login page.
    if (!isLoggedIn) {
        return <Navigate to="/"/>;
    }

    // Logout the user.
    return (
        <div className="header">
            <UserInfo userInfo={userInfo}/>
            <UserSettingOptions userInfo={userInfo}
                                usersRegisterList={usersRegisterList}
                                setUsersRegisterList={setUsersRegisterList}
                                handleLogout={handleLogout}/>
        </div>
    );
}

export default ProfileUser;
