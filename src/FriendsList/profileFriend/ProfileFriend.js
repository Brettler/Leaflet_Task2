

function ProfileFriend({currentFriend, userInfo}) {
    const friendInfo = userInfo.friendsList.find(friend => friend.registerUsername === currentFriend);

    if (!friendInfo) {
        return (
        <div className="header">
            <div className="user_image">
            </div>
            <div className="user_name">
            </div>
        </div>
        )
    }
    return(
        <div className="header">
          <div className="user_image">
            <img src={friendInfo.registerImage} className="cover" alt=""/>
          </div>
          <div className="user_name">
              {friendInfo.registerDisplayName}<br />
            <span>online</span>
          </div>
        </div>
    );

}

export default ProfileFriend;