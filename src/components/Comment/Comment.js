import React from 'react';

const Comment = (props) => {
    const {name,email,body} = props.postDetail;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p><b>Email: </b>{email}</p>
            <p><b>Comment: </b>{body}</p>
        </div>
    );
};

export default Comment;