import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"

import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components"
import { myTheme } from "./styles/themes/default"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />

        <Header />
        <h1>Dogs</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />

      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
