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