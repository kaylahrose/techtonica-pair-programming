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

  allTickets() {
    let string = "All tickets: "
    this.availableTickets.forEach(function(ticket, i) {
      string += `${i+1}. ${ticket.type} ($${ticket.price}) `
    });
    return string
  };
}
