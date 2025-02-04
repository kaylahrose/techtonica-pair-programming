class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tickets = [];
  }

  addTicket(ticket) { 
    this.tickets.push(ticket)
  }
}