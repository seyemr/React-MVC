import React, { useState } from 'react';
import Todolist from './Todolist';
import './css/style.css';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { IconContext } from 'react-icons';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <IconContext.Provider value={{ color: isDarkMode ? '#fff' : '#333', size: '2.5em' }}>
      {/* Icon rengini ve boyutunu ayarlamak için IconContext.Provider kullanılır */}
      <div className={isDarkMode ? 'wrapper dark-mode' : 'wrapper light-mode'}>
        <div className='App'>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <MdOutlineDarkMode className='icon-dark' /> : <MdDarkMode className='icon-light' />}
            {isDarkMode ? ' Light Mode' : ' Dark Mode'}
          </button>
          <div style={{ paddingTop: '80px' }} className='App__content container'>
            <div className='App__row'>
              <Todolist />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;

