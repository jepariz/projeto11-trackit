import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const percentage = 0;

  return (
    <StyledFooter>
      <Link to={"/habitos"}> <p>Hábitos</p></Link>
      <Link to={"/hoje"}><div>
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "18px",
            pathColor: `#fff`,
            textColor: "#fff",
            trailColor: "#52B6FF",
          })}
        />
     </div> </Link>
     <Link to={"/historico"}><p>Histórico</p></Link> 
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;

  p {
    font-size: 18px;
    color: #52b6ff;
  }

  div {
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52b6ff;
    position: absolute;
    bottom: 10px;
    left: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    box-sizing: border-box;
    padding: 5px;
  }

  a{
    text-decoration: none;
  }
`;
