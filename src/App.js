import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/MyContext";
import { useState } from "react";
import Today from "./pages/Today";
import Habits from "./pages/Habits";

function App() {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState("");
  const [token, setToken] = useState("");
  const [habit, setHabit] = useState(false);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <MyContext.Provider
          value={{
            image,
            setImage,
            progress,
            setProgress,
            token,
            setToken,
            habit,
            setHabit,
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
