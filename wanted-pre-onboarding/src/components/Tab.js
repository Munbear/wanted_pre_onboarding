import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 36px;
  border-bottom: solid 1px darkgray;
  
`;

const NavBtn = styled.button`
  flex: 1 1 40%;
  margin: auto;
  font-size: 18px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
  margin: auto;
  margin-bottom: 0;
  
  :focus {
    width: 100%;
    border-bottom: 1px solid black;
  }
`;





const Tab = () => {
    return(
        <>
            <NavBar>
                <NavBtn>감자</NavBtn>
                <NavBtn>고구마</NavBtn>
                <NavBtn>카레라이스</NavBtn>
            </NavBar>
        </>
    )
}

export default Tab;