import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./contexts/MyContext";
import { useState } from "react";
import Today from "./pages/Today";
import Habits from "./pages/Habits";
import History from "./pages/History";

function App() {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState("");
  const [token, setToken] = useState("");
  const [habit, setHabit] = useState(false);
  const [habitList, setHabitList] = useState([])
  const [habitData, setHabitData] = useState([]);

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
            setHabitList,
            habitList,
            habitData,
            setHabitData
          }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
