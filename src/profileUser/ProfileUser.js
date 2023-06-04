import {useState} from "react";
import {Navigate} from "react-router-dom";
import UserInfo from "./UserInfo";
import UserSettingOptions from "./UserSettingOptions";

/* This function implements the logout functionality. When the user clicks on the logout icon, they will be redirected
* to the login page.  */
function ProfileUser({userData, setContactsList}) {
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
            <UserInfo userData={userData}/>
            <UserSettingOptions setContactsList={setContactsList}
                                handleLogout={handleLogout}/>
        </div>
    );
}

export default ProfileUser;
