import {useState} from "react";
import {Navigate} from "react-router-dom";
import UserInfo from "./UserInfo";
import UserSettingOptions from "./UserSettingOptions";

function ProfileUser({userInfo, usersRegisterList}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLogout() {
        setIsLoggedIn(false);
    }

    if (!isLoggedIn) {
        return <Navigate to="/"/>;
    }

    return (
        <div className="header">
            <UserInfo userInfo={userInfo}/>
            <UserSettingOptions userInfo={userInfo} usersRegisterList={usersRegisterList} handleLogout={handleLogout}/>
        </div>
    );
}

export default ProfileUser;
