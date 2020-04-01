import React from 'react'

import { Wrapper, Content } from './styles';
import Header from '../../../Components/Header'

export default function AuthLayout( { children }) {
    return (
        <Wrapper>
                {/* <Header /> */}
                
                <Content>{children}</Content>
        </Wrapper>
    )
}
