
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Header from './component/common/header/Header';
// import Login from './component/common/header/Login';
// import Signup from './component/common/header/Signup';
import Home from './component/home/Home';
import Team from './component/pages/team/Team';
import Footer from './component/common/footer/Footer';
import ContactUs from './component/pages/contactus/ContactUs';
// import LoginPage from './component/pages/Login/LoginPage';
// import RegisterPage from './component/pages/Register/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegisterPage} /> */}
          <Route path="/team" exact component={Team} />
          <Route path="/contactus" exact component={ContactUs} />
          {/* <Route path="/faq" exact component={Faq} /> */}
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
