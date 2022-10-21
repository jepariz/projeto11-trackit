import { useContext } from "react";
import styled from "styled-components"
import MyContext from "../contexts/MyContext";

export default function TopBar() {

  const { image } = useContext(MyContext);
  
  return (
    <StyledTopBar>
    <h1>TrackIt</h1>
    <img src={image}></img>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`

width: 100%;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 15px;
position: fixed;
top: 0;
left: 0;
z-index: 1;

h1{
  font-family: 'Playball', cursive;
  font-size: 38px;
  color: #fff;
}

img{
  width: 51px;
  height: 51px;
  border-radius: 50%;
}

`