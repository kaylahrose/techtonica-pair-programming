class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  };

  addAvailableTickets(ticketType, ticketPrice) {
    let ticket = new Ticket(ticketType, ticketPrice);
    this.availableTickets.push(ticket);
  };
}
