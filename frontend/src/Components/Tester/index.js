import React, { useState, useEffect} from 'react'

export default function Tester() {
    const [state, setState] = useState('');

    useEffect(() => {

    

        function teste(){
            setState('chorabb')
        } 
        
        teste()
    

    }
    ,[state])

    return (
        <div>
            {state}
        </div>
    )
}
