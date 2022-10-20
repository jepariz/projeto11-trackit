import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [registerOk, setRegisterOk] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  function handleRegister() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email,
        name: name,
        image: image,
        password: password,
      }
    );
    promise.then((res) => {
      setRegisterOk(true);
      navigate("/");
    });

    promise.catch((err) => {
      alert(err.response.data.details);
      setRegister(false);
    });

    setRegister(true);
  }

  return (
    <>
      <RegisterContainer>
        <img src={logo} alt="logo"></img>
        <StyledForm>
          <input
            data-identifier="input-email"
            disabled={register && !registerOk ? true : false}
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            data-identifier="input-password"
            disabled={register && !registerOk ? true : false}
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <input
            data-identifier="input-name"
            disabled={register && !registerOk ? true : false}
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <input
            data-identifier="input-photo"
            disabled={register && !registerOk ? true : false}
            type="url"
            placeholder="foto"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          ></input>
          {register && !registerOk ? (
            <div>
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
            </div>
          ) : (
            <div onClick={() => handleRegister()}>Cadastrar</div>
          )}
        </StyledForm>
        <Link to="/">
          <p data-identifier="back-to-login-action">
            Já tem uma conta? Faça login!
          </p>
        </Link>
      </RegisterContainer>
    </>
  );
}

const RegisterContainer = styled.div`
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

const StyledForm = styled.form`
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
    font-size: 19px;
    padding: 8px;

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
