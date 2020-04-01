import React, { useState, useContext } from 'react';
import Post from '../../Components/Posts';
import api from '../../utils/api'
import { UserContext } from '../../utils/userContext'
import { Container } from './styles';

export default function MyPosts() {
    const posts = useContext(UserContext);

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
