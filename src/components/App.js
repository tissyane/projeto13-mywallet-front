import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context";
import { getWalletUser } from "../services/storage/getWalletUser";

const theme = {
  violet: "#8C11BE",
  orchid: "#A328D6",
  red: "#C70000",
  green: "#03AC00",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#868686",
  lightgray: "#C6C6C6",
};

export default function App() {
  const [login, setLogin] = useState(getWalletUser());

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ login, setLogin, theme }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route
              path="/accountBalance"
              element={
                <PrivatePage>
                  <HabitsPage />
                </PrivatePage>
              }
            />
            <Route
              path="/newIncome"
              element={
                <PrivatePage>
                  <TodayPage />
                </PrivatePage>
              }
            />
            <Route
              path="/newExpense"
              element={
                <PrivatePage>
                  <HistoricPage />
                </PrivatePage>
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}