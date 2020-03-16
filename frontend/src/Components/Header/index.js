import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import { useSelector } from 'react-redux'
import Notification from '../Notifications'

export default function Header() {
    const user = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src="" alt="Rate" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>
                <aside>
                    <Notification />
                    <Profile>
                        <div>
                            <strong>{user.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img src=" https://api.adorable.io/avatars/50/abott@adorable.png" alt="Avatar"/>
                    </Profile>
                </aside>

            </Content>
        </Container>
    )
}
