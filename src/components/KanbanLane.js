// src/components/KanbanLane.js
import React from 'react';
import TicketCard from './TicketCard';

function KanbanLane({ group, tickets, sortOption }) {
  const sortTickets = (tickets, sortOption) => {
    return [...tickets].sort((a, b) => {
      if (sortOption === 'Priority') return b.priority - a.priority;
      if (sortOption === 'Title') return a.title.localeCompare(b.title);
      console.log(`Tickets in group "${group}":`, tickets);
      return 0;
    });
  };

  const sortedTickets = sortTickets(tickets, sortOption);

  return (
    <div className="kanban-lane">
      <h2>{group}</h2>
      {sortedTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default KanbanLane;
