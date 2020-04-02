import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../utils/userContext';

export default function Tester2() {

    const context = useContext(UserContext);
    console.log(context)

    useEffect(() => 
        {
            context.updateContextValue('testes 2 manda');

        },[])

    return (
        <div>
            <h1>tester2 {context.test}</h1>
        </div>
    )
}
