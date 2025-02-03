const event1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

const event2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const event3 = new Event('Jenny Lewis', 'On the line tour 2019');

const events = new Array();

events.push(event1);
events.push(event1, event2, event3);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  events.forEach((item) => {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

event1.addTicket("human", 299);
event1.addTicket("vampire", 99);

event2.addTicket("General Admission", 25)
event2.addTicket("Floor Seating", 80)

event3.addTicket("Orchestra", 300)
event3.addTicket("Mezzanine", 200)
event3.addTicket("Balcony", 100)

console.log("allTickets =>", event1.allTickets())