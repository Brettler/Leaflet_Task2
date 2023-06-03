/* Here, the top left bar displays the user's details such as their display name and profile picture.  */
function UserInfo({userData}) {
    console.log(userData.profilePic);

    return (
        <>
            <div className="user_image">
                {/* For JPEG images */}
                <img src={`data:image/jpeg;base64,${userData.profilePic}`} className="cover" alt=""/>

                {/* For PNG images */}
                <img src={`data:image/png;base64,${userData.profilePic}`} className="cover" alt=""/>

                {/* For GIF images */}
                <img src={`data:image/gif;base64,${userData.profilePic}`} className="cover" alt=""/>

                {/* For SVG images */}
                <img src={`data:image/svg+xml;base64,${userData.profilePic}`} className="cover" alt=""/>
            </div>
            <div id="name" className="user_name">
                {userData.displayName}
            </div>
        </>
    );
}

export default UserInfo;
