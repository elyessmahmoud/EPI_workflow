import React from "react";

function Header({ showForm, setShowForm }) {
  const appTitle = "EPI OverFlow";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="EPI OverFlow" />
        <h1 className="title">{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "close" : "Share a fact"}
      </button>
    </header>
  );
}

export default Header;
