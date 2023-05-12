function UserInfo({userInfo}) {
    return (
        <>
            <div className="user_image">
                <img src={userInfo.registerImage} className="cover" alt=""/>
            </div>
            <div id="name" className="user_name">
                {userInfo.registerDisplayName}
            </div>
        </>
);
}
export default UserInfo;
