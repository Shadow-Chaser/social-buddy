import React, { useEffect, useState } from 'react';
import {Row } from 'react-bootstrap';
import Post from '../Post/Post';

const Home = () => {
    const [posts , setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div >
            <h1>This is home</h1>
            <h3>Total Post: {posts.length}</h3>

            <Row className="d-flex justify-content-center">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Row>

        </div>
    );
};

export default Home;