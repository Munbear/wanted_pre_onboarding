import React, {useState} from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: relative;
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
  color: ${({action}) =>  (action ? "red" : "gary")};
  
`;

const Pointer = styled.div`
    position: absolute;
    width: calc(100% / ${({borderSize}) => borderSize});
    top: 34px;
    left: 0;
    width: 597px;
    border-bottom: solid 3px red;
    transition: 0.2s ease-in;
    transform: translateX(calc(100% * ${({setAction}) =>  setAction}));
  
`;


const Tab = () => {
    const [tab, setTab] =useState(0);
    const itemList = ['감자', '고구마', '카레라이스'];
    // const [pointerMove, setPointerMove] = useState();

    return(
        <>
            <NavBar>
                {itemList.map( (value, index) => {
                    return(
                        <NavBtn
                            action={index === tab}
                            ket={value}
                            onClick={() => setTab(index)}

                        >{value}</NavBtn>
                    )
                })}
                <Pointer
                     setAction={tab}
                     borderSize={itemList.length}
                ></Pointer>
            </NavBar>
        </>
    )
}

export default Tab;