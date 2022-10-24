import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import styled from "styled-components"

export default function History() {
  return (
    <>
    <TopBar />
    <MessageContainer>
        <h3>Histórico</h3>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    </MessageContainer>
    <Footer />
    </>
    
  )
}

const MessageContainer = styled.div`

width: 100%;
margin-top: 80px;
box-sizing: border-box;
padding: 20px;

h3{
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 20px;
}

p{
    font-size: 18px;
    color: #666666;
}

`