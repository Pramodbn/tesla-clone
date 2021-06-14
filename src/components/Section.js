import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import "./section.css";

function Section( {title, description, leftBtnText, rightBtnText, backgroundIMG} ) {
    return (
        <Wrap bgImage={backgroundIMG}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton className="button">
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton className="button">
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
            </Buttons>
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  backgroud-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizantal
  background-image:${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 13vh;
    text-align: center;
    padding-bottom:59vh;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;

const LeftButton = styled.div`

`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
    text-align: center;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons= styled.div`
    justify-content: center;
    text-align: center;
`