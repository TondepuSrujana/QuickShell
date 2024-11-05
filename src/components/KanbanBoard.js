import React from 'react';
import KanbanLane from './KanbanLane';

function KanbanBoard({ tickets, groupingOption, sortOption }) {
  const groupTickets = (tickets, groupingOption) => {
    if (!Array.isArray(tickets)) return {}; 
    return tickets.reduce((groups, ticket) => {
      const key = ticket[groupingOption.toLowerCase()] || 'Unassigned';
      groups[key] = groups[key] ? [...groups[key], ticket] : [ticket];
      return groups;
    }, {});
  };

  const groupedTickets = groupTickets(tickets, groupingOption);
  console.log("Grouped tickets:", groupedTickets);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanLane
          key={group}
          group={group}
          tickets={groupedTickets[group]}
          sortOption={sortOption}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
