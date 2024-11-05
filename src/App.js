
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('Status');
  const [sortOption, setSortOption] = useState('Priority');

useEffect(() => {
  fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      if (Array.isArray(data)) {
        setTickets(data);
      } else if (data.tickets) { // Adjust based on actual response structure
        setTickets(data.tickets);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}, []);

    useEffect(() => {
    const savedView = localStorage.getItem("kanbanView");
    if (savedView) {
      setGroupingOption(JSON.parse(savedView));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kanbanView", JSON.stringify(groupingOption));
  }, [groupingOption]);

  return (
    <div className="App">
      <Header
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <KanbanBoard
        tickets={tickets}
        groupingOption={groupingOption}
        sortOption={sortOption}
      />
    </div>
  );
}

export default App;
