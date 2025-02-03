const event1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

const event2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const event3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

eventArray.push(event1);
eventArray.push(event1, event2, event3);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

event1.addAvailableTickets("human", 299);
event1.addAvailableTickets("vampire", 99);

event2.addAvailableTickets("General Admission", 25)
event2.addAvailableTickets("Floor Seating", 80)

event3.addAvailableTickets("Orchestra", 300)
event3.addAvailableTickets("Mezzanine", 200)
event3.addAvailableTickets("Balcony", 100)

console.log("allTickets =>", event1.allTickets())