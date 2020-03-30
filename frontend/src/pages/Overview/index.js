import React, { useEffect, useState } from 'react';
import { ContainerView, Container } from './styles';
import { useSelector } from 'react-redux'
import renderLineChart from '../../Components/BarChart'
import api from '../../utils/api';

export default function Overview() {
    const user = useSelector(state => state.user.profile)

    return (
        <ContainerView>
            <Container >
                <h3>Your Profile</h3>
                < hr />
                <h4>Joined <strong>July 2019</strong> </h4>
                <h4><strong>{user.following.length}</strong> Following <strong>|</strong> <strong>{user.followers.length}</strong> Followers</h4>
                <h4><strong>5</strong> Posts</h4>

                
            </Container>
            <Container>
                <h3>Your Posts</h3>
                < hr />
                <h4><strong>203</strong> Total votes</h4>
                <h4><strong>9.3 </strong>Best rating</h4>
            </Container>
            <Container>
                {/* <renderLineChart /> */}
            </Container>

        </ContainerView>
    )
}