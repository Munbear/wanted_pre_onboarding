import React from 'react'
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
  height: 100%;
  border-radius: 30px;
`;

const BasicBtn = styled.div`
  width: 100%;
  cursor: pointer;
  button{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 30px;
    background-color: lightgray;
  }
  button:focus {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: none;
    background-color: aqua;
    border: none;
    
  }
`;


const DetailBtn = styled.div`
  width: 100%;
  cursor: pointer;
  
  button{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 30px;
    background-color: lightgray;
  }
  button:focus{
    width: 100%;
    height: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: none;
    background-color: aqua;
    border: none;
  }
`;

const Toggle = () => {
    return(
        <Wrapper>
            <BtnContainer>
                <BasicBtn>
                    <button>기본</button>
                </BasicBtn>
                <DetailBtn>
                    <button>상세</button>
                </DetailBtn>
            </BtnContainer>
        </Wrapper>

    )
}

export default Toggle;