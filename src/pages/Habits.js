import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import { useState } from "react";

export default function Habits() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [selectedDay, setSelectedDay] = useState([]);
  const [habit, setHabit] = useState(false)

  function handleClick(index) {
    if (!selectedDay.includes(index)) {
      setSelectedDay([...selectedDay, index]);
    }

    if(selectedDay.includes(index)){
        const newArrayOfDays = selectedDay.filter((d) => d !== index)
        setSelectedDay(newArrayOfDays)
    }
  }

  return (
    <>
      <TopBar />
      <HabitsContainer>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button onClick={() => setHabit(true)}>+</button>
        </AddHabit>
        {habit ? <><NewHabitContainer>
          <input type="text" placeholder="nome do hábito"></input>
          <DaysContainer>
            {weekDays.map((d, index) => (
              <Day
                key={index}
                selectedDay={selectedDay.includes(index)}
                onClick={() => handleClick(index)}
              >
                {d}
              </Day>
            ))}
          </DaysContainer>
          <SaveHabit>
            <a>Cancelar</a>
            <button>Salvar</button>
          </SaveHabit>
        </NewHabitContainer>
        <HabitsMessage>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </HabitsMessage></> : <HabitsMessage>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </HabitsMessage> }
      </HabitsContainer>
      <Footer />
    </>
  );
}

const HabitsContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 600px;
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

const HabitsMessage = styled.div`
  margin-top: 30px;

  p {
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;

const NewHabitContainer = styled.div`
  margin-top: 30px;
  width: 340px;
  height: 180px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15px;
  gap: 10px;

  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 5px;
    color: #666666;
    font-size: 19px;

    &::placeholder {
      font-size: 19px;
      color: #dbdbdb;
    }

    &:focus {
      outline: none;
    }
  }
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Day = styled.button`
  border: 1px solid #d4d4d4;
  background-color: ${(props) => (props.selectedDay ? "#CFCFCF" : "#fff")};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 19px;
  color: ${(props) => (props.selectedDay ? "#fff" : "#dbdbdb")};
`;

const SaveHabit = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: center;

  a {
    color: #52b6ff;
    font-size: 16px;
  }

  button {
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
  }
`;
