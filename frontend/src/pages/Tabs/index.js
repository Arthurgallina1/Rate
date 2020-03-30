import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Following from '../Friends'
import Followers from '../Followers'
import Users from '../User'
import Overview from '../Overview'
import MyPosts from '../MyPosts'
import Tester from '../../Components/Tester'
import { Container } from './styles'

export default function TabSection() {
    return (
       <Container>
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Following</Tab>
                <Tab>Followers</Tab>
                <Tab>Users</Tab>
                <Tab>Posts</Tab>
                <Tab>Testes</Tab>
            </TabList>

            <TabPanel>
                <Overview />
            </TabPanel>
            <TabPanel>
                <Following/>
            </TabPanel>
            <TabPanel>
                <Followers/>
            </TabPanel>
            <TabPanel>
                <Users/>
            </TabPanel>
            <TabPanel>
                <MyPosts />
            </TabPanel>
            <TabPanel>
                <Tester />
            </TabPanel>
        </Tabs>
       </Container>
    )
}
