import React, { useState, useEffect } from 'react';
import Post from '../../Components/Posts';

export default function MyPosts() {
    useEffect(() => {
        //fetch posts
    }, [])
    return (
      

        <div>
            <Post duration={'2020-03-20T17:19:44.293+00:00'}/>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
