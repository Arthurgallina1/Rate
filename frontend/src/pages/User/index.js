import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import FollowBox from '../../Components/FollowBox';
import { useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ReactLoading from 'react-loading';
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await api.get(`/user/index/${userId}`);
        console.log(res.data);
        await setUsers(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    getUsers();
  }, []);
  return loading ? (
    <h1>
      {' '}
      <ReactLoading type={'cylon'} color={'#fd0565'} height={150} width={150} />
    </h1>
  ) : (
    users.map((user) => <FollowBox key={user.username} friend={user} />)
  );
}
