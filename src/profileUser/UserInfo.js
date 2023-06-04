/* Here, the top left bar displays the user's details such as their display name and profile picture.  */


const defaultPic = '../registerInfo/regImg/DefaultProfilePIC.png';

function UserInfo({userData}) {
    //console.log(userData.profilePic);
    let profilePic = userData.profilePic;
    if (!profilePic) {
        profilePic = defaultPic; // Use the default picture if no profilePic
    }
    return (
        <>
            <div className="user_image">
                <img src={profilePic} className="cover" alt=""/>
            </div>
            <div id="name" className="user_name">
                {userData.displayName}
            </div>
        </>
    );
}

export default UserInfo;
