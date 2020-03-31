import React, { useContext } from 'react'
import { UserContext } from '../../utils/userContext';
export default function Tester2() {

    const msg = useContext(UserContext);
    return (
        <div>
            <h1>ab {msg} </h1>
        </div>
    )
}
