class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);