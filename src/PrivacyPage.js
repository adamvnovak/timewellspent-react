import './App.css';
import Privacy from './Privacy';
import privacyicon from './privacy-policy.svg';
import { Link } from "react-router-dom";

function PrivacyPage() {
  return (
    <div className="App">
    <div className="Privacy-header">
      <img src={privacyicon} alt="privacy" className='App-store-button' />
      <Privacy/>
    </div>

    <header className="App-footer">
      <Link  to={{pathname: '/'}}>Mistberry</Link>
      <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" > Email us </a>
    </header>
  </div>
  );
}

export default PrivacyPage;