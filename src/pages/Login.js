import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import MyContext from "../contexts/MyContext";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false)


  const { image, setImage } = useContext(MyContext);
  const navigate = useNavigate();

  function handleLogin() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );
    promise.then((res) => {
      console.log(res.data);
      setImage(res.data.image)
      navigate("/hoje")
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setLogin(false)
    });

    setLogin(true)
  }

  return (
    <LoginContainer>
      <img src={logo} alt="logo"></img>
      <StyledForm>
        <input
          disabled={login ? true : false}
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
         disabled={login ? true : false}
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
       {login ? <div>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div> :  <div onClick={handleLogin}>Entrar</div> }
      </StyledForm>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  img {
    width: 180px;
    height: 178px;
  }

  a {
    margin-top: 30px;
    font-size: 13px;
    color: #52b6ff;
  }
`;

const StyledForm = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d4d4d4;
    color: #126ba5;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 8px;
    font-size: 19px;

    &::placeholder {
      font-size: 19px;
      color: #dbdbdb;
      padding: 5px;
    }

    &:focus {
      border: 2px solid #52b6ff;
      outline: none;
    }

    &:disabled {
      color: #dbdbdb;
      background-color: #f2f2f2;
    }
  }

  div {
    width: 303px;
    height: 45px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
