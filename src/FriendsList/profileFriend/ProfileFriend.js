
import imgRegnar from '../FriendProperties/images/Ragnar_Lothbrok.jpg'

function ProfileFriend() {
    return(
        <div className="header">
          <div className="user_image">
            <img src={imgRegnar} className="cover" alt=""/>
          </div>
          <div className="user_name">
            Ragnar Lothbrok<br />
            <span>online</span>
          </div>
        </div>
    );

}

export default ProfileFriend;