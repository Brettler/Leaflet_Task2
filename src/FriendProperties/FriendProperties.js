

function FriendProperties( friend ) {
    return(
        <li className="friend_block">
        <div className="img_friend">
          <img src={friend.img} className="cover" />
        </div>
        <div className="details">
          <div className="friend_name">
            {friend.name}
            <p className="time_date">
              {friend.day_time}
            </p>
          </div>
          <div className="last_message">
            <p>
              {friend.last_msg}
            </p>
            {friend.num_msg && ( // Conditionally render the num_messages element
            <num_messages>{friend.num_msg}</num_messages>
          )}
          </div>
        </div>
      </li>
    );

}

export default FriendProperties;