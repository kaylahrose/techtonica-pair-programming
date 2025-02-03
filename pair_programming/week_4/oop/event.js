class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tickets = [];
  }

  addTickets(name, price) {
    let ticket = new Ticket(name, price);
    this.tickets.push(ticket)
  }
}