import React, { useState, useEffect } from 'react';
import Post from '../../Components/Posts';
import api from '../../utils/api'
import { useSelector } from 'react-redux'
import { Container } from './styles';

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    const userId = useSelector(state => state.user.profile._id);

    useEffect(() => {
        async function getPosts(){
            const response = await api.get('/post/myposts',{ userId });
            setPosts(response.data);
        }
        getPosts();
    }, [])
    return (
      

        <Container>
            {
                posts.length > 0 ? 
                ( 
                    posts.map(post => (
                        <Post key={post._id} postId={post._id} duration={post.duration} title={post.title} description={post.description}/>
                    ))
                ) :
                (
                    <div className="no-posts-msg">
                        <h3>You don't have any posts yet!</h3>
                        <h4>Starting posting and rating!</h4>
                    </div>
                )
            }

        </Container>
    )
}
