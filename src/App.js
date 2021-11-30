import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AOS from 'aos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  useEffect(() => {

    AOS.init();

  })
  return (
    <div className="App">

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/project/:name">
            <ProjectDetail></ProjectDetail>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
