import React from 'react';
import { useHistory } from 'react-router';

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
            <p>PostId: {id}</p>
            <p><b>Title:</b> {title} </p>
            <p><b>Post: </b>{body}</p>
        
            <button onClick={()=> showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;