import styled from "styled-components";
import {useContext } from "react";
import MyContext from "../contexts/MyContext";
import axios from "axios";
import trash from "../assets/trash.png"

export default function RegisteredHabit() {
  
  const { token} = useContext(MyContext);

function createHabitCard (){

 

  const promise = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  promise.then((res) => {
    console.log(res.data);
    
  });

  promise.catch((err) => {
    alert(err.response.data.message);
   
  });
}




  return (
    <HabitCard>
      <p>{}</p>
      <img src={trash} alt="deletar"></img>
      {/* {weekDays.map((d, index) => (
        <Day days={habitData.days.includes(index)} key={index}>
          {d}
        </Day> */}
      
    </HabitCard>
  );
}


const HabitCard = styled.div`
  width: 340px;
  height: 91px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 30px;
  position: relative;

  p {
    font-size: 19px;
    color: #666666;
    margin-bottom: 10px;
  }

  img{
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Day = styled.button`
  border: 1px solid #d4d4d4;
  background-color: ${(props) => (props.days ? "#CFCFCF" : "#fff")};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 19px;
  color: ${(props) => (props.days ? "#fff" : "#dbdbdb")};
  margin-right: 5px;

  &:disabled {
      color: #dbdbdb;
      background-color: #f2f2f2;
    }
`;