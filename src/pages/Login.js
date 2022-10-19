import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"


export default function Login() {
  return (
    <LoginContainer>
      <img src={logo} alt="logo"></img>
      <StyledForm>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <button>Entrar</button>
      </StyledForm>
     <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link> 
    </LoginContainer>
  )
}


const LoginContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;

img{
  width: 180px;
  height: 178px;
}

a{
  margin-top: 30px;
  font-size: 13px;
  color: #52B6FF;
}
`

const StyledForm = styled.div`

margin-top: 30px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:8px;

input{
  width: 303px;
  height: 45px;
  border: 1px solid #D4D4D4;
  color: #126BA5;
  border-radius: 5px;
  box-sizing: border-box;

  &::placeholder{
    font-size: 19px;
    color: #DBDBDB;
   padding: 5px;
  }

  &:focus{
   border: 2px solid #52B6FF; 
   outline: none;
  }
}


button{
  width: 303px;
  height: 45px;
  background-color: #52B6FF;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}

` 