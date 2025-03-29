import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FirstFocus from './components/FirstFocus';
import Content from './components/Content';

function App() {
  const [isGiveVisible, setIsGiveVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isGiveVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isGiveVisible]);

  const toggleGivePopup = () => {
    setIsGiveVisible(!isGiveVisible);
  };

  return (
    <>
      <div>
        <Header isGiveVisible={isGiveVisible} toggleGivePopup={toggleGivePopup} />
        <Content />
      </div>
    </>
  );
}

export default App;
