


function ProfileUser() {
    return(
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
    );

}

export default ProfileUser;