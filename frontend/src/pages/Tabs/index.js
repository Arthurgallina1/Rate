import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Friends from '../Friends'
import { Container } from './styles'

export default function TabSection() {
    return (
       <Container>
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Friends</Tab>
                <Tab>Title 2</Tab>

            </TabList>

            <TabPanel>
                <h2>Overview</h2>
            </TabPanel>
            <TabPanel>
                <Friends/>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
       </Container>
    )
}
