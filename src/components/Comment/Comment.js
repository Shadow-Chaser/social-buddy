import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Comment = (props) => {
    const {name,email,body} = props.postDetail;
    return (
        <div>
 
            <ListGroup className="m-5">
                <ListGroup.Item>Name: {name}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
                <ListGroup.Item>Comment: {body}</ListGroup.Item>
               
            </ListGroup>

        </div>
    );
};

export default Comment;