import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <Container>
            <Link to="/createpost"><button type="button">CREATE POST</button></Link>
            <>
            <h5>timeline</h5>
            </>
        </Container>
    )
}
