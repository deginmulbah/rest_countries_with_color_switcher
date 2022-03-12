import ThemeContext from '../context/ThemeProvider';
import { useContext, useState } from 'react';

import { FaMoon , FaSun } from 'react-icons/fa'
function ModeBtn() {
  const { themeName, setTheme } = useContext(ThemeContext)
  const [mood, setMood] = useState(themeName === 'dark')
 
  return (
    <div className="color-switcher">
      <button className='btn-color-switcher' onClick={(e) => {
        setTheme(mood ? "dark" : "light");
        setMood(!mood);
      }}>
       {mood ? <FaMoon  color="black"/> : <FaSun color="yellow"/>}  {mood ?  " Dark" : "Light"} Mode
      </button>
    </div>
  )
}

export default ModeBtn