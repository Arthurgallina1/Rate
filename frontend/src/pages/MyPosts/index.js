import React, { useState, useEffect } from 'react';
import Post from '../../Components/Posts';
import api from '../../utils/api'
import { useSelector } from 'react-redux'

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    const userId = useSelector(state => state.user.profile.userId);

    useEffect(() => {
        async function getPosts(){
            const response = await api.get('/post/index', {
                "userId" : "5e6ed41303443d36a55198ee"
            });
            setPosts(response.data);
        }
        getPosts();
    }, [])
    return (
      

        <div>
            {
                posts.map(post => (
                    <Post key={post._id} postId={post._id} duration={post.duration} title={post.title} description={post.description}/>
                ))
            }

        </div>
    )
}
