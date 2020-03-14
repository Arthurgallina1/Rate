import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Friends from '../Friends'
import Users from '../User'
import { Container } from './styles'

export default function TabSection() {
    return (
       <Container>
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Friends</Tab>
                <Tab>Users</Tab>

            </TabList>

            <TabPanel>
                <Friends/>
            </TabPanel>
            <TabPanel>
                <h2>Overview</h2>
            </TabPanel>
            <TabPanel>
                <Users/>
            </TabPanel>
        </Tabs>
       </Container>
    )
}
