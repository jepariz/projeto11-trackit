import axios from "axios";
import styled from "styled-components";
import MyContext from "../contexts/MyContext";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import Days from "./Days";

export default function NewHabit() {
  const [habitName, setHabitName] = useState("");
  const [sendHabit, setSendHabit] = useState(false);
  const [selectedDay, setSelectedDay] = useState([]);

  const { token, setHabit, setHabitList, habitList } = useContext(MyContext);


  function sendNewHabit() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        name: habitName,
        days: selectedDay,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promise.then((res) => {
      setHabitName("");
     setHabit(false)
      setSendHabit(false);
      setSelectedDay([]);
      createHabitCard();
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });

    setSendHabit(true);
  }

  function createHabitCard() {
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
    setSendHabit(false);
  }

  return (
    <NewHabitContainer>
      <input
        disabled={sendHabit ? true : false}
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => setHabitName(e.target.value)}
        value={habitName}
      ></input>
      <Days
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        disabled={sendHabit ? true : false}
      />
      <SaveHabit>
        <span onClick={() => setHabit(false)}>Cancelar</span>
        {sendHabit ? (
          <div>
            <ThreeDots
              height="11"
              width="43"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <div onClick={sendNewHabit}>Salvar</div>
        )}
      </SaveHabit>
    </NewHabitContainer>
  );
}

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

const SaveHabit = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: center;

  span {
    color: #52b6ff;
    font-size: 16px;
  }

  div {
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
