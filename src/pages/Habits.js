import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import HabitMessage from "../components/HabitMessage";
import styled from "styled-components";
import { useState, useContext } from "react";
import MyContext from "../contexts/MyContext";
import RegisteredHabit from "../components/RegisteredHabit";
import NewHabit from "../components/NewHabit";

export default function Habits() {

  const { habit, setHabit} = useContext(MyContext);
  const [registeredHabit, setRegisteredHabit] = useState(false);

  return (
    <>
      <TopBar />
      <HabitsContainer>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button onClick={() => setHabit(true)}>+</button>
        </AddHabit>
        {habit && !registeredHabit ? (
          <>
            <NewHabit setRegisteredHabit={setRegisteredHabit} />
            <HabitMessage />
          </>
        ) : registeredHabit ?  <RegisteredHabit/> : (
          <HabitMessage />
        )}

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


