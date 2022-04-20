import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const BtnContainer = styled.nav`
  background-color: lightgray;
  position: relative;
  display: flex;
  justify-content: center;
  width: 350px;
  border-radius: 30px;
  
  .btn {
    position: absolute;
    width: 172px;
    margin: 2px;
    height: 32px;
    left: 2px;
    opacity: 1;
    border-radius: 30px;
    background: white;
    
    &.right {
      transform: translateX(170px);
      transition: 0.2s ease-in;
    }
    &.left {
      transform: translateX(0px);
      transition: 0.2s ease-in;
    }
  }
`;

const BasicBtn = styled.div`
  width: 100%;
  height: 36px;
  cursor: pointer;
  
  button{
    font-weight: bold;
    color: black;
    cursor: pointer;
    opacity: 0.9;
    width: 100%;
    border: none;
    background: transparent;
    font-size: 18px;
    margin: 7px;
  }
  
  //button:focus{
  //  width: 90%;
  //  border-radius: 30px;
  //  background-color: darkturquoise;
  //}
`;

const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    const BtnItems = ['기본','상세'];

    const onClickHandler = () => {
        setToggle(prev => !prev);
    }
    return(
        <Wrapper>
            <BtnContainer onClick={onClickHandler}>
                <div className={`btn ${toggle ? "right" : "left"}` }></div>
                {BtnItems.map((items,index) => {
                    return(
                        <>
                            <BasicBtn>
                                <button>{items}</button>
                            </BasicBtn>
                        </>
                    )
                })}
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