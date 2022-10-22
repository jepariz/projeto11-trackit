import styled from "styled-components";


export default function HabitMessage() {
  return (
    <HabitsMessage>
    <p>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
      para começar a trackear!
    </p>
  </HabitsMessage>
  )
}

const HabitsMessage = styled.div`
  margin-top: 30px;

  p {
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;