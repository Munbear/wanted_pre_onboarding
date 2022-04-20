import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const BtnContainer = styled.nav`
  background-color: lightgray;
  display: flex;
  justify-content: center;
  width: 350px;
  border-radius: 30px;
`;

const BasicBtn = styled.div`
  width: 100%;
  height: 36px;
  cursor: pointer;
  
  button{
    cursor: pointer;
    width: 100%;
    border: none;
    background: transparent;
    font-size: 18px;
    margin: 7px;
  }
  
  button:focus{
    width: 90%;
    border-radius: 30px;
    background-color: darkturquoise;
  }
  
  div {
    width: 90px;
    height: 36px;
    background-color: orange;
    border-radius: 30px;
  }
  
  
`;

const Toggle = () => {
    const [toggle, setToggle] = useState(0);
    const BtnItems = ['기본','상세'];
    return(
        <Wrapper>
            <BtnContainer>
                {BtnItems.map((items,index) => {
                    return(
                        <>
                            <BasicBtn>
                                <button>{items}</button>
                            </BasicBtn>
                        </>
                    )
                })}
                <div></div>
            </BtnContainer>
        </Wrapper>

    )
}

// <BasicBtn>
//     <button>{item}</button>
// </BasicBtn>
// <DetailBtn>
//     <button>{item}</button>
// </DetailBtn>

export default Toggle;