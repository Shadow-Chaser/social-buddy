import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';

const Post = (props)=> {
    console.log(props.post);
    const {title, body, id} = props.post;
    const history = useHistory();
    const showComments=(id)=>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Post ID:{id}</Card.Subtitle>
                    <Card.Text>
                         {body}
                    </Card.Text>
                    <Button onClick={()=> showComments(id)} variant="info">Show Comment</Button> 
                </Card.Body>
            </Card>

        </div>
    );
};

export default Post;