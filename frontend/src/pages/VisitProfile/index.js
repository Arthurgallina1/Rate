import React, { useEffect, useState } from 'react';
import { Container, ContainerBg, ContainerUpdate } from './styles';
import { useParams } from 'react-router-dom';
import FeedBox from '../../Components/FeedBox';
import { useFetch } from '../../utils/hooks';
import Banner from '../Create/Banner';
import api from '../../utils/api';

export default function VisitProfile({ match }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { id } = match.params;
  //   const followerCount = userInfo.user.followers.length;
  //   const followingCount = userInfo.user.following.length;
  useEffect(() => {
    async function getUserInfo() {
      const res = await api.get(`user/info/${id}`);
      setUserInfo(res.data);
      setLoading(false);
    }
    getUserInfo();
  }, []);

  // useEffect(() => {
  //   async function getUserPosts() {
  //     const res = await api.post('post/getpost', { userId: id });
  //     setPosts(res.data);
  //   }
  //   getUserPosts();
  // }, []);

  return (
    <ContainerUpdate>
      <ContainerBg>
        <Banner banner_url={userInfo.bg_url} />
      </ContainerBg>
      <Container>
        <div className="upper-box">
          <img src={userInfo.avatar_url} alt="" />
          <button>
            <strong>FOLLOW</strong>
          </button>
          <div className="middle-box">
            <h3>{userInfo.name}</h3>
            <h4>{userInfo.username}</h4>
            <br />
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              nihil labore sunt!
            </span>
            <div className="lower-box">
              <strong>400</strong> Following <strong>333</strong> Followers
            </div>
            <br />
            <div className="posts">
              <h3>
                <strong>RATES</strong>
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </ContainerUpdate>
  );
}
