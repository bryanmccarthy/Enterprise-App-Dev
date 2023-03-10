import './Header.css';
import { useState } from 'react';

function Header() {
  const [showControlButtons, setShowControlButtons] = useState(false);

  return (
    <div className="Header">
      <h2 className="Title">Country Information</h2>
      <button className="Toggle-Show-Control" onClick={() => setShowControlButtons(!showControlButtons)}>
        { showControlButtons ? 'Hide' : 'Control' }
      </button>
      {
        showControlButtons ?
          <div className="Control-Buttons">
            <button className="Control-Button">background!</button>
            <button className="Control-Button">font size!</button>
            <button className="Control-Button">italics!</button>
            <button className="Control-Button">buttons!</button>
            <button className="Control-Button">this!</button>
          </div>
        :
          null
      }
    </div>
  )
}

export default Header;
