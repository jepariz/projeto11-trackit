import styled from "styled-components";

export default function Days({ setSelectedDay, selectedDay }) {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleClick(index) {
    if (!selectedDay.includes(index)) {
      setSelectedDay([...selectedDay, index]);
    }

    if (selectedDay.includes(index)) {
      const newArrayOfDays = selectedDay.filter((d) => d !== index);
      setSelectedDay(newArrayOfDays);
    }
  }

  return (
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
  );
}

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

  &:disabled {
    color: #dbdbdb;
    background-color: #f2f2f2;
  }
`;
