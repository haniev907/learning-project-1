import React from 'react';

const Bookmark = ({user, toggleUser}) => {
    return ( 
        <button>
             <i className={"bi bi-bookmark" + (user.bookmark ? "-heart-fill" : "")} onClick = {() => toggleUser(user._id)}></i>
        </button>
     );
}
 
export default Bookmark;