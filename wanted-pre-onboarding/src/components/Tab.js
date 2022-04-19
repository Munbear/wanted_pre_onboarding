import React, {useState} from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 36px;
`;

const NavBtn = styled.button`
  flex: 1 1 40%;
  font-size: 18px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
  border-bottom: solid 1px #ccc;
  
  :focus{
    border-bottom: solid 2px darkturquoise;
  }
`;



const Tab = () => {
    const [tab, setTab] =useState(0);
    const ItemList = ['감자', '고구마', '카레라이스'];

    return(
        <>
            <NavBar>
                {ItemList.map( (value, index) => {
                    return(
                        <NavBtn>{value}</NavBtn>
                    )
                })}
            </NavBar>
        </>
    )
}

export default Tab;