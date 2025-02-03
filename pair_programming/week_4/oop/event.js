class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tickets = [];
  };

  addAvailableTickets(ticketType, ticketPrice) {
    let ticket = new Ticket(ticketType, ticketPrice);
    this.tickets.push(ticket);
  };

  allTickets() {
    let string = "All tickets: "
    this.tickets.forEach(function(ticket, i) {
      string += `${i+1}. ${ticket.type} ($${ticket.price}) `
    });
    return string
  };
}
