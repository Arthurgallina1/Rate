import React, { useState, useEffect } from 'react'
import { Container, Box, Comments } from './styles';
import Comment from '../../Components/Comment'
import FriendBox from '../../Components/FriendBox'

export default function RatePage({match}) {
    console.log(match)
    // const { postid } = params;
    const friendSimulator = {
        name: 'Name',
        username: 'Username',
        description: 'Description bla bla bla bla'
    }

    useEffect(() => {
        // async function(){

        // }
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <Container>
            <Box>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                <h2>Titulo do post</h2>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore obcaecati magnam, accusamus beatae voluptas praesentium voluptatum eaque illum sequi architecto.</h5>
                <div> RATE: 4.3 / 10 </div>
                <Comments>
                    <FriendBox  friend={friendSimulator} friendship={'rate'}/>
                    <FriendBox friend={friendSimulator} friendship={'rate'}/>
                    <FriendBox friend={friendSimulator} friendship={true} />
                </Comments>

            </Box>
        </Container>
    )
}
