import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Container, Content, Profile } from './styles';
import { useSelector } from 'react-redux'
import Notification from '../Notifications';
import Logo from '../../assets/letra-r.svg';
import { FiLogOut } from 'react-icons/fi'
import history from '../../utils/history';
import { signOut } from '../../store/modules/auth/actions'

export default function Header() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.profile);

    function handleLogout(){
        dispatch(signOut());
    }
    return (
        <Container>
            <Content>
                <nav>
                    <img src={Logo} className="logo" alt="Rate" />
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
                        <FiLogOut size={20} color={'#fff'} onClick={handleLogout}/>
                    </Profile>
                </aside>

            </Content>
        </Container>
    )
}
