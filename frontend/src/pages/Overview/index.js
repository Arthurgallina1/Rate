import React from 'react';
import { ContainerView, Container } from './styles';

export default function Overview() {
    return (
        <ContainerView>
            <Container >
                <h3>Your Profile</h3>
                < hr />
                <h4>Joined <strong>July 2019</strong> </h4>
                <h4><strong>18</strong> Following <strong>|</strong> <strong>2</strong> Followers</h4>
                <h4><strong>5</strong> Posts</h4>

                
            </Container>
            <Container>
                <h3>Your Posts</h3>
                < hr />
                <h4><strong>203</strong> Total votes</h4>
                <h4><strong>9.3 </strong>Best rating</h4>
            </Container>
            <Container>
                Grafico
            </Container>

        </ContainerView>
    )
}
