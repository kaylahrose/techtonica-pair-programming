class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tickets = [];
  };

  addTicket(ticket) {
    this.tickets.push(ticket);
  };

  allTickets() {
    let string = "All tickets: "
    this.tickets.forEach(function(ticket, i) {
      string += `${i+1}. ${ticket.type} ($${ticket.price}) `
    });
    return string
  };

  searchTickets(lowerPrice, upperPrice) {
    
  }
}
