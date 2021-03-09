import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetails, setPostDetails] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setPostDetails(data))
    },[])
    return (
        <div>
            <h1>Post Details of id {id}</h1>

            {
                postDetails.map(postDetail => <Comment postDetail = {postDetail}></Comment>)
            }
        </div>
    );
};

export default PostDetail;