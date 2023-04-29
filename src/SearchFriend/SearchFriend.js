import {useRef} from 'react';



/* This function recive a function as an argument.*/
function SearchFriend({doSearch}) {

    /* We initilaize the varaible with null.*/
    const searchBox = useRef(null);

    const search = function() {
        /* Because doSearch is a function we can send the value that the user type in the search input box.*/
        doSearch(searchBox.current.value)
    }
    
    
    return (
        <div className="search_chat">
            <div>
                {/* Ref={} is the simmilar to do id='' and then getElementById. Ref is a hook -> make for us possible to catch things from the user.
                     we creat reference to the element input -> we call this refernce searchBox  and then we can use the 
                     search box everywhere we want in the code, we use it in the function above the recive the current value
                     that the user typed in the search box.*/}
                <input ref={searchBox} onKeyUp={search} className="form-control" type="text" placeholder="Search here" aria-label="default input example" />
                <i id="search_icon" className="bi bi-search" />
            </div>
        </div>
    );
}
export default SearchFriend;