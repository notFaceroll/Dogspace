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
import ProtectedRoute from "./Components/utils/ProtectedRoute"
import Account from "./pages/Account"
import Photo from "./pages/Photo"
import UserProfile from "./pages/Account/UserProfile"
import NotFound from "./pages/NotFound"

import { Container, AppBody } from './styles/app';

function App() {

  return (
    <Container>
      <BrowserRouter>
        <UserProvider>
          <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <Header />
            <AppBody>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route path="photo/:id" element={<Photo />} />
                <Route path="profile/:user" element={<UserProfile />} />
                <Route path="account/*"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppBody>
            <Footer />
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </Container>
  )
}

export default App
