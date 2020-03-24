import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Friends from '../Friends'
import Users from '../User'
import Overview from '../Overview'
import MyPosts from '../MyPosts'
import { Container } from './styles'

export default function TabSection() {
    return (
       <Container>
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Friends</Tab>
                <Tab>Users</Tab>
                <Tab>Posts</Tab>
            </TabList>

            <TabPanel>
                <Overview />
            </TabPanel>
            <TabPanel>
                <Friends/>
            </TabPanel>
            <TabPanel>
                <Users/>
            </TabPanel>
            <TabPanel>
                <MyPosts />
            </TabPanel>
        </Tabs>
       </Container>
    )
}
