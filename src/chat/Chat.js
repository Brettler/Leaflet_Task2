import friends from '../FriendsList/FriendProperties/friends';

import SearchFriend from '../SearchFriend/SearchFriend';
import {useState} from 'react';
import FriendListResults from '../FriendsList/friendListResults/FriendLisTresults';


import ProfileUser from '../profileUser/ProfileUser';

import './chat.css';
import ProfileFriend from '../FriendsList/profileFriend/ProfileFriend';
import ChatWindow from '../chatWindow/ChatWindow';
import MessageBox from '../messageBox/MessageBox';
function Chat({userInfo, usersRegisterList}) {

  /*Create hook named state.
    As a deafult input we will be all the friends the user have.
    setSearchQuery- will set the changes in the searchBox - Setter.
    The update of the current state is searchQuery - Getter. */
    
  const [friendList, setFriendList] = useState(friends);
  
   /* The function recive query (the input in the search box) */
  const doSearch = function (q) {
    /* Give the setter as an input the friends list of the user.
      Filter the list of friends such that check each friend in freinds if he true or false.
      True will be if the friend name include the string 'q' otherwise false.
      Such that only friends with the input string will stay. 
      Finally we update the friendList with the setter setFriendList.
      When the friendList is updated it cause the App function to be called again and it will return the HTML we the updated friends list.*/
    setFriendList(friends.filter((friend) => friend.name.toLowerCase().startsWith(q.toLowerCase())));
  }

  /* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login /> }></Route>
      </Routes>
    </BrowserRouter> */

  return (
    <div id='chat' className='chatPage'>

    <div className="container col-12">
      <div className="left_side">
        {/* Define User information and options */}
        <ProfileUser userInfo={userInfo} usersRegisterList={usersRegisterList}/>
        {/* Define the search chat bar */}
        {/* Passing to SearchFriend the variable doSearch -> doSearch is type function */}
        <SearchFriend doSearch={doSearch}/>
        {/* Define the chat list */}
          {/* Define FRIENDs! */}
          {/* {friendsList} */}
          <FriendListResults friends={friendList}/>
      </div>
      {/* Define The chat itself */}
      {/* Right side of the program */}
      <div className="right_side">
        {/* Information of the user we are currently chatting with */}
        <ProfileFriend/>
        <ChatWindow/>
        <MessageBox/>
      </div>
    </div>
    </div>
  );
}

export default Chat;
