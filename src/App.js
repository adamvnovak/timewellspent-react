import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './LandingPage';
// import { Link } from "react-router-dom";
import PrivacyPage from './PrivacyPage';
import RedirectPage from './RedirectPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/download" element={<RedirectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
