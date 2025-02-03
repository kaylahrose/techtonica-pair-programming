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
    // get all ticket types and prices
    let string = "All tickets: "
    this.availableTickets.forEach(function(ticket, i) {
      string += `${i+1}. ${ticket.type} ($${ticket.price}) `
      // ticket.type
      // ticket.price
    }
  )
  return string


    
    // 'All tickets: 1. human ($299)'
    // format it in string
    // "All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)"
    return `All tickets: 1. ${this.availableTickets[0].type} ($${this.availableTickets[0].price})`
  };
}
