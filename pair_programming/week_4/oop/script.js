const event1 = new Event(
  'KLOS Golden Gala', 
  'An evening with hollywood vampires'
);
const event2 = new Event(
  'Skillet & Sevendust', 
  'Victorious war tour'
);
const event3 = new Event(
  'Jenny Lewis', 
  'On the line tour 2019'
);

const events = new Array();

events.push(event1, event2, event3);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  events.forEach((item) => {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

console.log("event1.tickets",event1.tickets)
event1.addTickets("human", 299);
event1.addTickets("vampire", 99);
console.log("event1.tickets",event1.tickets)