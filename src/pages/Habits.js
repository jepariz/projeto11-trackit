import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import HabitMessage from "../components/HabitMessage";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import MyContext from "../contexts/MyContext";
import RegisteredHabit from "../components/RegisteredHabit";
import NewHabit from "../components/NewHabit";
import axios from "axios";

export default function Habits() {
  const { token, habit, setHabit, habitList, setHabitList } =
    useContext(MyContext);
  const [registeredHabit, setRegisteredHabit] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((res) => {
      setHabitList(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }, []);

  return (
    <>
      <TopBar />
      <HabitsContainer>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button onClick={() => setHabit(true)}>+</button>
        </AddHabit>
        {habitList.length !== 0 ? 
        habit ?  <><NewHabit /> <RegisteredHabit /></> : <RegisteredHabit /> : 
        habit ? (
          <>
            <NewHabit /> <HabitMessage/>
          </>
        ) : <HabitMessage/> }
      </HabitsContainer>
      <Footer />
    </>
  );
}

const HabitsContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 85px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

const AddHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 22px;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52b6ff;
    font-size: 26px;
    color: #fff;
  }
`;
