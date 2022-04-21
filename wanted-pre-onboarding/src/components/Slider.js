import React, { useState } from "react";
import styled, {css} from 'styled-components';




const Slider = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const values = [0, 25, 50, 75, 100];
    const [click, setClick] = useState(false);
    const startX = 12 //document.querySelector(".gauge_box").offsetLeft의 값


    const clickValue = () => {
        setClick(true)
    }

    const closeValue = () => {
        setClick(false)
    }

    const mouseMove = (e) => {
        const btn = document.querySelector(".slider_btn")
        if (click) {
            if (e.clientX < (startX + 301) & (startX - 1) < e.clientX) {
                btn.style.left = `${e.clientX}px`
                setSliderValue(Math.floor((e.clientX - startX) / 3))
            }

        }
    }

    const setValue = (e) => {
        const btn = document.querySelector(".slider_btn")
        const value = startX + Number(e.target.className) * 3
        btn.style.left = `${value}px`
        setSliderValue((value - startX) / 3)

    }



    return (
        <>
            <Container>
                <ValueBox type="text" value={sliderValue + `%  `} disabled/>
                <GaugeBoxWrap>
                    <GaugeBar>
                        <div className="gauge_box" onMouseOut={closeValue}
                             style={{
                                 width: `${sliderValue * 3}px`,
                                 height: "100%",
                                 backgroundColor: "aqua" }}>
                            <GaugeBarBtn
                                onMouseDown={clickValue}
                                onMouseUp={closeValue}
                                onMouseMove={mouseMove}
                                className="slider_btn">
                            </GaugeBarBtn>
                        </div>
                    </GaugeBar>
                </GaugeBoxWrap>
                {values.map((value, index) => {
                    return (
                        <GaugeBtnWrap>
                            <button
                                key={index}
                                onClick={setValue}
                                className={value}
                                style={{
                                    position: "absolute",
                                    left: `${value * 3 + startX}px`,
                                    margin: "0px",
                                    padding: "0px",
                                    width: "25px",
                                    marginTop: "5px",
                                    transform: "translate(-50%, 0%)"
                                }}
                            >
                                {value}
                            </button>
                        </GaugeBtnWrap>
                    )
                })}
            </Container>
        </>
    )
}

let Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

let ValueBox = styled.input`
  position: relative;
  left: 745px;
  text-align: end;
  font-weight: bold;
  color: black;
  width: 300px;
  height: 40px;
  font-size: 1.5rem;
  background-color: white;
  border: solid 1px #ccc;
`;

let GaugeBoxWrap = styled.div`
  display: flex;
`;

let GaugeBar = styled.div`
  position: relative;
  width: 300px;
  height: 15px;
  border-radius: 10px;
  border: solid 2px aqua;
  margin-top: 10px;
  padding: 0;
  left: 745px;
`;


let GaugeBarBtn = styled.button`
  width: 15px;
  height: 15px;
  borderRadius: 15px;
  position: absolute;
  padding: 0;
  border-radius: 10px;
  border: solid 1px gray;
  background-color: darkturquoise;
  transform: translate(-50%, 0%);
  cursor: pointer;
`;

let GaugeBtnWrap = styled.div`
  position: relative;
  left: 735px;
  background-color: orange;
  top: 4px;
  margin: 0;
  padding: 0;
  
  button{
    border: none;
    border-radius: 30px;
  }
`;




export default Slider