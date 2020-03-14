import React from 'react';
import api from '../../utils/api';


export default function Dashboard() {

    const res = api.get('/user/show');
    console.log(res.data);
    
    return (
        <div>
            Dashboard
        </div>
    )
}
