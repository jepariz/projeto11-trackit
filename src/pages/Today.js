import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../contexts/MyContext";
import dayjs from "dayjs";
import locale from "../components/Locale";
import check from "../assets/check.png";

export default function Today() {
  dayjs.locale("pt-br");

  const { token, setProgress, progress, habitData, setHabitData } = useContext(MyContext);
  
 const [checked, setChecked] = useState([])
 const [unchecked, setUnchecked] = useState([])
 const [habitDone, setHabitDone] = useState(false)



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
      setHabitData(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, [habitDone]);

function markDone (id, index){

  if(habitData[index].done === false){
   
    const body = {};

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        body,
        config
      );
  
      promise.then((res) => {
        console.log(res.data);
        setChecked([...checked, id])  
        setProgress(progress +1)
        setHabitDone(true)
     
      });
  
      promise.catch((err) => {
        console.log(err.response.data.message);
      });
  }

    if(habitData[index].done === true){
     
      const body = {};

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        body,
        config
      );
      promise.then((res) => {
        console.log(res.data);
        setHabitDone(true)
      });
    
      promise.catch((err) => {
        console.log(err.response.data.message);
      }); 
    
    }   
}

console.log(habitData)

  return (
    <>
      <TopBar />
      <TodayContainer>
        <ProgressContainer>
          <h3>{dayjs("2022-10-24").format("dddd, DD/MM")}</h3>
          <p>Nenhum hábito concluído ainda</p>
        </ProgressContainer>
        {habitData.map((h, index) => (
          <HabitContainer key={h.id} sequencia={checked.includes(h.id) || h.done} record={h.currentSequence === h.highestSequence}>
            <div>
              <h3>{h.name}</h3>
              <p>Sequência atual: <span>{h.currentSequence} dias</span> </p>
              <p>Seu recorde: <span>{h.highestSequence} dias</span></p>
            </div>
            <CheckButton
              onClick={() => markDone(h.id, index)}
              habitChecked={checked.includes(h.id) || h.done} 
            >
              <img src={check} alt="hábito concluído"></img>
            </CheckButton>
          </HabitContainer>
        ))}
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
  border: 1px solid #e7e7e7;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 15px;

  h3 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
    color: #666666;

    span{
      color: ${prop => prop.sequencia ? "#8FC549" : "#666666"};
    }
    
  }
`;

const CheckButton = styled.div`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background-color: ${(prop) => (prop.habitChecked ? "#8FC549" : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
