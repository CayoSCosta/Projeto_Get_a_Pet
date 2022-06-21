import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Container from './components/layout/container'
import Message from './components/layout/message'

// Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

//context
import { UserProvider } from '../src/context/userContext'

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/Register">
              <Register />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
