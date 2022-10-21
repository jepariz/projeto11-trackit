import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/MyContext"
import { useState } from "react";
import Today from "./pages/Today";

function App() {

  const [image, setImage] = useState("")
  const [progress, setProgress] = useState("")
  const [email, setEmail] = useState("")
  



  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <MyContext.Provider value={{email, setEmail, image, setImage, progress, setProgress}}>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/hoje" element={<Today />} />
        </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
