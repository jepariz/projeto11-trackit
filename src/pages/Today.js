import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import styled from "styled-components"
import { useContext, useEffect } from "react";
import axios from "axios";
import MyContext from "../contexts/MyContext";
import DayJS from 'react-dayjs';



export default function Today() {


  const { token, setHabitList } =
  useContext(MyContext);

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
      console.log(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);


  return (
   <>
    <TopBar/>
   <TodayContainer>
   <ProgressContainer>
    <DayJS></DayJS>
    <p>Nenhum hábito concluído ainda</p>
   </ProgressContainer>
  </TodayContainer>
  <Footer />
   
   </>
  
  
  )
}

const TodayContainer = styled.div`

width: 100%;
background-color: #F2F2F2;
box-sizing: border-box;
padding: 20px;


`


const ProgressContainer = styled.div`
margin-top: 80px;
width: 100%;


h3{
    font-size: 23px;
    color: #126BA5;
}

p{
    font-size: 18px;
    color: #BABABA;
    margin-top: 5px;
}



`