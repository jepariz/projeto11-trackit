import styled from "styled-components"


export default function Progress() {
  return (
   <ProgressContainer>
    <h3>Segunda, 17/05</h3>
    <p>Nenhum hábito concluído ainda</p>

   </ProgressContainer>
  )
}

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