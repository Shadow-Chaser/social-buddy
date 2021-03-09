import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

  

      <Router>
      <div>
        <Navbar bg="info" variant="dark">
          <Navbar.Brand href="/home">Social Buddy</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/topic">Topic</Nav.Link>
            </Nav>
       </Navbar>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>

          <Route path="/">
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
