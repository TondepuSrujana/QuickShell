import React from 'react';

function TicketCard({ ticket }) {
  const { title, priority, user } = ticket;
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];

  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>User: {user || 'Unassigned'}</p>
      <p>Priority: {priorityLabels[priority]}</p>
    </div>
  );
}

export default TicketCard;
