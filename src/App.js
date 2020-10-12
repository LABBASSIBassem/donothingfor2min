import React from 'react';
import './App.css';
import styled from 'styled-components'
import logo from './assets/logo.png'
import Try from './Components/Try'
import useMusic from './Music'

const MainWrapper = styled.section `
width: 100%; 
margin: 0 auto;
`
const Logo = styled.img`
width: 55px;
height: 21px;
margin: 10px 0 1px 10px;
z-index: 10
`
const Text = styled.p `
color: white;
margin-top:5%;
margin-bottom:4%;
text-align:center;
font-size: 30px;
font-weight: 700;
text-shadow: 1px  white;
letter-spacing:1px;

`
function App() {

  return (
   <MainWrapper>
     <Logo src={logo}/>
     <Text>do nothing for 2 min</Text>
     <Try />
     {useMusic()}
   </MainWrapper>
  );
}

export default App;

