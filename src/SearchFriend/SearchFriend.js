import {useRef} from 'react';

/* This function implements the search bar functionality to search for a chat by a friend's name. If the friend's name
* matches the prefix entered in the search bar, that friend will be displayed in the list, otherwise, they will not
* appear in the list momentarily. */
function SearchFriend({doSearch}) {

    // The search box is initialized as empty.
    const searchBox = useRef(null);

    // Search for friends whose usernames contain the specific prefix entered in the search box.
    const search = function () {
        /* Because doSearch is a function we can send the value that the user type in the search input box.*/
        doSearch(searchBox.current.value)
    }

    // Display the appropriate friend chats.
    return (
        <div className="search_chat">
            <div>
                <input ref={searchBox} onKeyUp={search} className="form-control" type="text" placeholder="Search here"
                       aria-label="default input example"/>
                <i id="search_icon" className="bi bi-search"/>
            </div>
        </div>
    );
}

export default SearchFriend;