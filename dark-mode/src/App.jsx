import React from "react";

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>خدمات ما</li>
            </ul>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content"></div>
    </div>
  );
};

export default App;
