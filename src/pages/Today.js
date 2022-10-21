import TopBar from "../components/TopBar"
import Footer from "../components/Footer"
import styled from "styled-components"

export default function Today() {
  return (
   <>
    <TopBar/>
   <TodayContainer>
  </TodayContainer>
  <Footer />
   
   </>
  
  
  )
}

const TodayContainer = styled.div`

width: 100%;
height: 600px;
background-color: #F2F2F2;



`