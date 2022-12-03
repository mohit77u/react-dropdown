import React, { useState } from "react";
import "./App.css";

export default function App(){
  const [active, setActive] = useState(false);

  const items = [
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
    {title: 'Item 5'},
  ]

  const toggleDropdown = () => {
    setActive(!active);
  };

  const closeActive = () => {
    if(active){
      setActive(false);
    }
  }

  return (
    <div className="App" onClick={closeActive}>
      <div className="main">

        {/* dropdown */}
        <div className={active ? "main-dropdown active" : "main-dropdown"}>
           <div
              className="dropdown-header"
              onClick={toggleDropdown}
            >
              <span>Dropdown Header</span>
              <img src="https://img.icons8.com/ios-glyphs/16/ffffff/expand-arrow--v1.png"  alt="toogle-icon"/>
            </div>
            {active && (
              <div className="dropdown-menu">
                <ul>
                  {items.map((item, index) =>(
                    <li key={index}>{item.title}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
       
      </div>
    </div>
  );
}
