import React, { useContext } from 'react'
import { UserContext } from '../../utils/userContext';

export default function Tester() {

    const msg = useContext(UserContext);
    return (
        <div>
            <h1>about {msg} </h1>
        </div>
    )
}
