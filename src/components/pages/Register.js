import React from 'react'
import styled from "styled-components";
import { AccountBox } from '../accountBox';
import './Register.css'
import Footer from './../Footer';



const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Register() {
 
  return (
    <>
    <div className='regis'>
     <AppContainer>
      <AccountBox />
    </AppContainer> 
    </div>
    < Footer />
    </>
  )
}

export default Register;
