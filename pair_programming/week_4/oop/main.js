const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

const eventArray = new Array();

eventArray.push(eventObj1);
eventArray.push(eventObj1, eventObj2, eventObj3);

document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

// debugger
console.log("allTickets =>", eventObj1.allTickets())