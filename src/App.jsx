import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FirstFocus from './components/FirstFocus';

function App() {
  const [isGiveVisible, setIsGiveVisible] = useState(false);

  useEffect(() => {
    if (isGiveVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isGiveVisible]);

  const toggleGivePopup = () => {
    setIsGiveVisible(!isGiveVisible);
  };

  return (
    <>
      <div>
        <Header isGiveVisible={isGiveVisible} toggleGivePopup={toggleGivePopup} />
        <FirstFocus /> 
      </div>
    </>
  );
}

export default App;
