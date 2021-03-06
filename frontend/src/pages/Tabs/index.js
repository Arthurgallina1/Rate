import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
import Following from '../Friends';
import Followers from '../Followers';
import Users from '../User';
import Overview from '../Overview';
import MyPosts from '../MyPosts';
import Tester from '../../Components/Tester';
import Tester2 from '../../Components/Tester2';
import api from '../../utils/api';

import { Container } from './styles';
import { UserContext } from '../../utils/userContext';

export default function TabSection() {
  const [post, setPost] = useState([]);
  const [info, setInfo] = useState('');

  const userId = useSelector((state) => state.user.profile._id);
  useEffect(() => {
    async function getPosts() {
      const response = await api.get('/post/index', { userId });
      const myPosts = response.data.filter((post) => post.userId == userId);
      setPost(myPosts);
    }
    getPosts();
  }, []);

  function updateContextValue(value) {
    setInfo(value);
  }

  return (
    <Container>
      <Tabs>
        <TabList>
          <Tab>
            <strong>Profile</strong>
          </Tab>
          <Tab>
            <strong>Following</strong>
          </Tab>
          <Tab>
            <strong>Followers</strong>
          </Tab>
          <Tab>
            <strong>Users</strong>
          </Tab>
          <Tab>
            <strong>Post</strong>
          </Tab>
          {/* <Tab>Testes</Tab>
                <Tab>Testes2</Tab> */}
        </TabList>

        <UserContext.Provider value={{ post, info, updateContextValue }}>
          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel>
            <Following />
          </TabPanel>
          <TabPanel>
            <Followers />
          </TabPanel>
          <TabPanel>
            <Users />
          </TabPanel>
          <TabPanel>
            <MyPosts />
          </TabPanel>
          {/* <TabPanel>
                    <Tester />
                </TabPanel>
                <TabPanel>
                    <Tester2 />
                </TabPanel> */}
        </UserContext.Provider>
      </Tabs>
    </Container>
  );
}
