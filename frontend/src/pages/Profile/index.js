import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, RightContainer, Tab } from './styles'
import { MdPinDrop } from 'react-icons/md'
import TabSection from '../Tabs';

export default function Profile() {
    
    return (
        <Container>
            <aside>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Profile Image"/>

                <h3>agallina</h3>
                <h4>Arthur Gallina</h4>

                <Link to="/updateprofile"> <button >Edit Profile</button></Link> 
                <Box>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur laboriosam obcaecati consectetur dolorem rerum enim facilis quo, asperiores modi.</p>
                    <span><MdPinDrop size={20} color={'#333'} /> Brazil </span>

                </Box>
            </aside>

            <RightContainer>
                <TabSection>

                </TabSection>
            </RightContainer>

           {/* <Link to="/updateprofile"> <button >Update Profile</button></Link> */}
        </Container>
    )
}
