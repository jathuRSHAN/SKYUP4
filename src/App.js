
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Header from './component/common/header/Header';
import Login from './component/common/header/Login';
import Signup from './component/common/header/Signup';
import Home from './component/home/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          {/* <Route path="/faq" exact component={Faq} /> */}
        </Switch>

      </Router>

    </>
  );
}

export default App;
