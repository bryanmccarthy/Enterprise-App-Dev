import './Header.css';
import duck from '../images/duck.jpg';
import { useState } from 'react';

function Header() {
  const [showControlButtons, setShowControlButtons] = useState(false);
  const [showDuck, setShowDuck] = useState(false);

  // handle changing p elements
  function handleChangeP() {
    const p = document.getElementsByTagName('p');
    for (let i = 0; i < p.length; i++) {
      p[i].classList.contains('ChangeP') ? p[i].classList.remove('ChangeP') : p[i].classList.add('ChangeP');
    }
  }

  // Handle changing h2 elements
  function handleChangeH() {
    const h = document.getElementsByTagName('h2');
    for (let i = 0; i < h.length; i++) {
      h[i].classList.contains('ChangeH') ? h[i].classList.remove('ChangeH') : h[i].classList.add('ChangeH');
    }
  }

  // handle changing tr elements
  function handleChangeTableRows() {
    const tr = document.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
      tr[i].classList.contains('ChangeTr') ? tr[i].classList.remove('ChangeTr') : tr[i].classList.add('ChangeTr');
    }
  }

  // Handle changing Table element
  function handleChangeTable() {
    const table = document.getElementsByTagName('table');
    for (let i = 0; i < table.length; i++) {
      table[i].classList.contains('ChangeTable') ? table[i].classList.remove('ChangeTable') : table[i].classList.add('ChangeTable');
    }
  }

  // handle displaying the duck
  function handleDuck() {
    setShowDuck(!showDuck);
  }

  return (
    <div className="Header">
      <h2 className="Title">Country Information</h2>
      <button className="Toggle-Show-Control" onClick={() => setShowControlButtons(!showControlButtons)}>
        { showControlButtons ? 'Hide' : 'Control' }
      </button>
      {
        showControlButtons ?
          <div className="Control-Buttons">
            <button className="Control-Button" onClick={handleChangeH}>decorate headers</button>
            <button className="Control-Button" onClick={handleChangeP}>color paragraphs</button>
            <button className="Control-Button" onClick={handleChangeTableRows}>highlight table rows</button>
            <button className="Control-Button" onClick={handleChangeTable}>hide table</button>
            <button className="Control-Button" onClick={handleDuck}>spawn a duck</button>
          </div>
        :
          null
      }

      <div className="Duck-Container">
        { showDuck ? <img src={duck} className="Duck-Img" /> : null }
      </div>
    </div>
  )
}

export default Header;
