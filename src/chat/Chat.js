import friends from '../FriendProperties/friends';
import imgRegnar from '../FriendProperties/images/Ragnar_Lothbrok.jpg'
import SearchFriend from '../SearchFriend/SearchFriend';
import {useState} from 'react';
import FriendListResults from '../friendListResults/FriendLisTresults';

import './chat.css';
function Chat() {

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
        <div className="header">
          <div className="user_image">
            <img src="fall.JPG" className="cover" alt=""/>
          </div>
          <div id="name" className="user_name">
            Ashleaf Maple
          </div>
          {/* Add data-bs-toggle and data-bs-target attributes to the ul element */}
          <ul className="add_friend_icon" data-bs-toggle="modal" data-bs-target="#addFriendModal">
            <i className="bi bi-person-add" />
          </ul>
          {/* Add Bootstrap modal markup before the closing </body> tag */}
          <div className="modal fade" id="addFriendModal" tabIndex={-1} aria-labelledby="addFriendModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addFriendModalLabel">Add Friend</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="friendName" placeholder="Enter friend's username" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-success">Add Friend</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Define the search chat bar */}
        {/* Passing to SearchFriend the variable doSearch ->
          doSearch is type function */}
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
        <div className="header">
          <div className="user_image">
            <img src={imgRegnar} className="cover" alt=""/>
          </div>
          <div className="user_name">
            Ragnar Lothbrok<br />
            <span>online</span>
          </div>
        </div>
        <div className="chat_box">
          {/* Message container */}
          <div className="message_container">
            {/* My message */}
            <div className="message my_message">
              Hey man, when will you be coming back to Kattegat?
              <div className="message_time">13:45</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              You'll be seeing me soon enough
              <div className="message_time">13:46</div>
            </div>
            {/* My message */}
            <div className="message my_message">
              What will you tell your people?
              <div className="message_time">13:46</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              That their king is back
              <div className="message_time">13:47</div>
            </div>
            {/* My message */}
            <div className="message my_message">
              You're gonna need something stronger than that...
              <div className="message_time">13:48</div>
            </div>
            {/* My message */}
            <div className="message my_message">
              Some people don't recognize you as king
              <div className="message_time">13:48</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              How's this: <br />
              It appears my return is not welcome.
              You've obviously all made your mind up about me.
              I cannot blame you for that. <br />
              So.. Who's gonna do it than?
              <div className="message_time">13:51</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              Who's gonna kill me?
              <div className="message_time">13:51</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              Well I don't mind. Go ahead. Please... <br />
              Look at these people!
              They no longer support me! LOOK!
              Why would they?!?
              I am your leader! AnD I jUsT lEfT.
              What kind of leader does that huh?!
              <div className="message_time">13:52</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              WHAT KIND OF KING ABANDONS HIS PEOPLE?!!
              What kind of father, abandons his sons.
              <div className="message_time">13:52</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              So who wants to be king? <br />
              OH YOU KNOW HOW THIS WORKS!
              If you want to be king - you must kill me.
              <div className="message_time">13:53</div>
            </div>
            {/* Friend message */}
            <div className="message friend_message">
              WHO WANTS TO BE KING??!!!
              <div className="message_time">13:53</div>
            </div>
          </div>
          {/* Chat input and send button */}
          <div className="chat_input_container">
            <div className="chat_icons">
              <i className="bi bi-emoji-smile" />
              <i className="bi bi-paperclip" />
              <i className="bi bi-mic" />
            </div>
            <input type="text" className="form-control chat_input" placeholder="Type your message..." />
            <button className="btn btn-success send_button" type="submit">
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chat;
