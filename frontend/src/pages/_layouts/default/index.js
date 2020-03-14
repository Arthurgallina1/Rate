import React from 'react'
import Header from '../../../Components/Header'
import { Wrapper } from './styles';

export default function AuthLayout( { children }) {
    return (
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
    )
}
