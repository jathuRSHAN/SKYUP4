
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Header from './component/common/header/Header';
import Login from './component/common/header/Login';
import Signup from './component/common/header/Signup';
import Home from './component/home/Home';
import Team from './component/pages/team/Team';
import Footer from './component/common/footer/Footer';
import ContactUs from './component/pages/contactus/ContactUs';
import Career from './component/pages/career/Career';



function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/team" exact component={Team} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/career" exact component={Career} />
          {/* <Route path="/faq" exact component={Faq} /> 
      </Routes> */}

        <Routes>  {/* ✅ Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router >

    </>
  );
}

export default App;
