import React, { useState } from 'react';

import { Container, Badge, NotificationList, Notifications, Scroll } from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notification() {
    
    const [visible, setVisible] = useState(false);

    function handleToggleVisible(){
        setVisible(!visible);
    }

    return (
        <Container>
            <Badge hasUnread onClick={handleToggleVisible}>
                <MdNotifications color="#fff" size={20} />
            </Badge>

            <NotificationList visible={visible}>
               <Scroll>
                    <Notifications unread>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <time>2 days ago.</time>
                        <br/>
                        <button type="button">Mark as read.</button>
                    </Notifications>
                    <Notifications>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <time>2 days ago.</time>
                        <br/>
                        <button type="button">Mark as read.</button>
                    </Notifications>
                    <Notifications>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <time>2 days ago.</time>
                        <br/>
                        <button type="button">Mark as read.</button>
                    </Notifications>
                    <Notifications unread>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <time>2 days ago.</time>
                        <br/>
                        <button type="button">Mark as read.</button>
                    </Notifications>
               </Scroll>
            </NotificationList>
        </Container>
    )
}
