import appstorebutton from './download-on-appstore.svg';
import logo from './smileberry-xl.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Mindberry
        </h2>
        <h4>
          Mindfulness interruptions during prolonged screen use
        </h4>
        <a
          href="https://apps.apple.com/app/apple-store/id6444199915"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstorebutton} alt="appstorebutton" className='App-store-button' />
        </a>
      </header>

      <header className="App-footer">
        <Link  to={{pathname: '/privacy'}}>Privacy</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" > Email us </a>
      </header>
    </div>
  );
}

export default LandingPage;
