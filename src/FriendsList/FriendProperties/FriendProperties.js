

function FriendProperties( {friend,userInfo,setCurrentFriend } ) {
    const handleClick = () => {
        setCurrentFriend(friend.registerUsername);
    };
    const friendInfo = userInfo.friendsInfo[friend.registerUsername];

    return(
        <li className="friend_block" onClick={handleClick}>
        <div className="img_friend">
          <img src={friend.registerImage} className="cover" alt="" />
        </div>
        <div className="details">
          <div className="friend_name">
            {friend.registerDisplayName}
            <p className="time_date">
              {friendInfo.day_time}
            </p>
          </div>
          <div className="last_message">
            <p>
              {friendInfo.last_msg}
            </p>
              {/*{friend.num_msg && ( // Conditionally render the num_messages element
            <num_messages>{friend.num_msg}</num_messages>
          )}*/}
          </div>
        </div>
      </li>
    );

}

export default FriendProperties;