import React from 'react';

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h2>Hello</h2>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread Messages.
                </h2>
            }
        </div>
    );
}


export default Mailbox;