export function groupTickets(tickets, groupBy) {
    return tickets.reduce((groups, ticket) => {
      const key = ticket[groupBy] || "Unassigned";
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(ticket);
      return groups;
    }, {});
  }
  
  export function sortTickets(tickets, sortBy) {
    return tickets.sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  }
  