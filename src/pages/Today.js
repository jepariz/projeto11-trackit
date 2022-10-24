import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../contexts/MyContext";
import dayjs from "dayjs";
import check from "../assets/check.png"

export default function Today() {
  dayjs.locale("pt-br");

  const { token, setHabitList } = useContext(MyContext);
  const [habitData, setHabitData] = useState([])

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((res) => {
      setHabitData(res.data)
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <>
      <TopBar />
      <TodayContainer>
        <ProgressContainer>
          <h3>{dayjs("2022-10-24").format("dddd, DD/MM")}</h3>
          <p>Nenhum hábito concluído ainda</p>
        </ProgressContainer>
        {habitData.map((h, index) =>  
        <HabitContainer key={habitData[index].id}>
          <div>
            <h3>{habitData[index].name}</h3>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </div>
          <CheckButton><img src={check} alt="hábito concluído"></img></CheckButton>
        </HabitContainer> )}
       
      </TodayContainer>
      <Footer />
    </>
  );
}

const TodayContainer = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding: 20px;
`;
const ProgressContainer = styled.div`
  margin-top: 80px;
  width: 100%;

  h3 {
    font-size: 23px;
    color: #126ba5;
  }

  p {
    font-size: 18px;
    color: #bababa;
    margin-top: 8px;
    margin-bottom: 30px;
  }
`;

const HabitContainer = styled.div`
width: 340px;
height: 94px;
border: 1px solid #E7E7E7;
background-color: #fff;
border-radius: 5px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: space-between;


h3{
  font-size:20px;
  color: #666666;
  margin-bottom: 8px;
}

p{
  font-size: 13px;
  color: #666666;
}

`

const CheckButton = styled.div`
width: 69px;
height: 69px;
border-radius: 5px;
background-color: #EBEBEB;
border: 1px solid #E7E7E7;
display: flex;
align-items: center;
justify-content: center;
`
