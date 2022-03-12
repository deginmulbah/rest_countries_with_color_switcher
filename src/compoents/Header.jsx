import React from 'react';
import ModeBtn from './ModeBtn';
import Container from './general/Container';
function Header() {
  return (
    <div className='header'>
      <Container>
        <div className='element-row'>
          <div className='header-title'>
            <h2>Where In The World?</h2>
          </div>
          <div className='mode-btn'>
            <ModeBtn />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header