import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../utils/userContext';

export default function Tester() {

    const context = useContext(UserContext);
    console.log(context)

    useEffect(() => 
        {
            context.updateContextValue('novo testes');

        },[])

    return (
        <div>
            <h1>about {context.test}</h1>
        </div>
    )
}
