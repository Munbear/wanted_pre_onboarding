import React, {useState} from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle as Box } from 'react-icons/ai';


const InputSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const EmailBox  = styled.div`
  padding: 20px;
  
  InputEmail{
    width: 200px;
    height: 30px;
  }
  
  .box {
    padding-left: 4px;
    position: absolute;
    right: 800px;
    top: 230px;
  }
`;

const InputEmail = styled.input`
  width: 200px;
  height: 30px;
  
`;

const PasswordBoxWrap = styled.div`
`;

const PasswordInput = styled.input`
  width: 200px;
  height: 30px;
`;

const PasswordCheckBoxWrap = styled.div`
  button{
    cursor: pointer;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 285px;
    left: 978px;
    border-radius: 10px;
    border: none;
    background-color: black;
  }
`;



const Input = () => {
    const [email, setEmail] = useState(false);
    const [checkTypeEmail, setCheckTypeEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState({
        type: 'password',
        visible: false
    });
    const [color, setColor] = useState();

    const checkEmail= (e) => {
        const reg =  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if( reg.test(e)) {
            console.log('hello')
            setEmail(true)
            setColor('blue')
        }else{
            setEmail(false)
            setColor('')
        }
    }

    const passwordOnClickHandler = (e) => {
        setCheckPassword( ()=> {
            if(!checkPassword.visible) {
                return {type: 'text', visible: true};
            }
            return {type: 'password', visible: false};
        })
    }

    return(
        <>
            <InputSection>
                <EmailBox>
                    <InputEmail type='email' onChange={ e => {
                        checkEmail(e.target.value)
                    }} placeholder='Email'/>
                    <Box className='box' style={
                        {color:`${color}`}
                    }/>
                </EmailBox>
                <PasswordBoxWrap>
                    <PasswordInput type={checkPassword.type} placeholder='password'/>
                    <PasswordCheckBoxWrap>
                        <button onClick={ () => {
                            passwordOnClickHandler()
                        }}/>
                    </PasswordCheckBoxWrap>
                </PasswordBoxWrap>

            </InputSection>
        </>
    )
}

export default Input;