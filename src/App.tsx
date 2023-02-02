import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"

import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components"
import { myTheme } from "./styles/themes/default"
import UserProvider from "./context/UserContext"
import Account from "./pages/Account"

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={myTheme}>
          <GlobalStyle />

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />

        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
