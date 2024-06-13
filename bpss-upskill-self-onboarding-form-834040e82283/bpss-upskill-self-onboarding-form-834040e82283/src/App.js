import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderNumber from './components/HeaderNumber/headerNumber';
import SkillingDetails from './components/SkillingDetails/SkillingDetails';
import SignupPage from './components/SignupPage/SignupPage';
import logo from './assets/logo.svg';
import SuccessModal from './components/SuccessModal/SuccessModal';
import { useState } from 'react';

function App() {

  const [showSuccessModal, setSuccessModal] = useState(false);

  return (
    <div className="App container-fluid main_container">
      <div className="row">
        <div className="left-section col-lg-8 order-lg-1 order-md-2 order-2">
          <HeaderNumber />
          <SkillingDetails />
        </div>
        <div className="right-section col-lg-4 order-lg-2 order-md-1 order-1">
          <div className="row">
            <div className="col-lg-12 p-0">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              {!showSuccessModal &&
                <SignupPage
                  showSuccessModal={showSuccessModal}
                  setSuccessModal={setSuccessModal}
                />
              }
              {showSuccessModal &&
                <SuccessModal />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
