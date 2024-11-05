// src/components/Header.js
import React from 'react';
import './Header.css';
function Header({ groupingOption, setGroupingOption, sortOption, setSortOption }) {
  return (
    <header className="header">
      <h1>Kanban Board</h1>
      <div className="header-dropdowns">
        <div className="dropdown">
          <label>Grouping:</label>
          <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
            <option value="Status">Status</option>
            <option value="User">User</option>
            <option value="Priority">Priority</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Ordering:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
