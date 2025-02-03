const event1 = new Event('KLOS Golden Gala','An evening with hollywood vampires');
const event2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const event3 = new Event('Jenny Lewis', 'On the line tour 2019');

const events = new Array();

events.push(event1, event2, event3);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  events.forEach((event) => {
    html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

let ticket1 = new Ticket("human", 299);
event1.addTicket(ticket1)
let ticket2 = new Ticket("vampire", 99);
event1.addTicket(ticket2)

let ticket3 = new Ticket("General Admission", 25)
event2.addTicket(ticket3)
let ticket4 = new Ticket("Floor Seating", 80)
event2.addTicket(ticket4)

let ticket5 = new Ticket("Orchestra", 300)
event3.addTicket(ticket5)
let ticket6 = new Ticket("Mezzanine", 200)
event3.addTicket(ticket6)
let ticket7 = new Ticket("Balcony", 100)
event3.addTicket(ticket7)

