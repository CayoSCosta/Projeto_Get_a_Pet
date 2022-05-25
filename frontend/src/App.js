import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Container from './components/layout/container'

// Pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}

export default App
