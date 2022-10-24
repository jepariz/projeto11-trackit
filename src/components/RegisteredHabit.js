import styled from "styled-components";
import { useContext, useEffect } from "react";
import MyContext from "../contexts/MyContext";
import trash from "../assets/trash.png";
import axios from "axios";

export default function RegisteredHabit() {
  const { token, habitList, setHabitList } = useContext(MyContext);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];


  function deleteHabit(id) {

    const status = window.confirm("Deseja deletar esta hábito?")

    if(status){
      axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {headers: {
      Authorization: `Bearer ${token}`,
    }})
        .then(console.log("deletado"));
    }

    setHabitList(habitList.filter((h) => h.id !== id))
    
};

  return (
    <>
      {habitList.map((h, index) => (
        <HabitCard key={habitList[index].id}>
          <p>{habitList[index].name}</p>
          <img src={trash} alt="deletar" onClick={() => deleteHabit(habitList[index].id)}></img>
          {weekDays.map((d, index) => (
            <Day days={h.days.includes(index)} key={index}>
              {d}
            </Day>
          ))}
        </HabitCard>
      ))}
    </>
  );
}

const HabitCard = styled.div`
  width: 340px;
  height: 91px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 20px;
  position: relative;

  p {
    font-size: 19px;
    color: #666666;
    margin-bottom: 10px;
  }

  img {
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
