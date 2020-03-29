import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Badge, NotificationList, Notifications, Scroll } from './styles';
import { MdNotifications } from 'react-icons/md';
import api from '../../utils/api';
import { parseISO, formatDistance } from 'date-fns';

export default function Notification() {
    const [notifications, setNotifications ] = useState([]);
    const [visible, setVisible] = useState(false);
    const [unread, setUnread] = useState(false);
    const userId = useSelector(state => state.user.profile._id);

    useEffect(() => {
        async function getNotifications(){
            const res = await api.post('/notifications/index', { userId });
            const data = res.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(parseISO(notification.createdAt), new Date())
            }))
            await setNotifications(data)
        }
        getNotifications();


        

    }, [])

    useEffect(() => {
        notifications.every(notification => notification.read == true) ? setUnread(false) : setUnread(true)
    }, [notifications])


    function handleToggleVisible(){
        setVisible(!visible);
    }

    async function handleRead(id){
        await api.put(`notifications/update/${id}`)
        setNotifications(
            notifications.map(notification =>
                notification._id === id ? { ...notification, read: true } : notification
                )
        )
    }

    return (
        <Container>
            <Badge hasUnread={unread} onClick={handleToggleVisible}>
                <MdNotifications color="#fff" size={20} />
            </Badge>

            <NotificationList visible={visible}>
               <Scroll>
                   {
                       notifications.map(notification => (
                            <Notifications key={notification._id} read={!notification.read}>
                                <p>{notification.content}</p>
                                <time>{notification.timeDistance}</time>
                                <br/>
                                <button type="button" onClick={() => handleRead(notification._id)}>Mark as read.</button>
                            </Notifications>
                       ))

                   }
               </Scroll>
            </NotificationList>
        </Container>
    )
}
