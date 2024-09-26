const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'YOUR_OAUTH_TOKEN';

// Example route for fetching user details
app.get('/users/:userId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/users/${req.params.userId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

// Example route for fetching event details
app.get('/events/:eventId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/events/${req.params.eventId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

// Example route for fetching ticket class details
app.get('/ticket_classes/:ticketClassId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/ticket_classes/${req.params.ticketClassId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

// Example route for fetching order details
app.get('/orders/:orderId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/orders/${req.params.orderId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

// Example route for fetching venue details
app.get('/venues/:venueId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/venues/${req.params.venueId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

// Example route for fetching organizer details
app.get('/organizers/:organizerId', async (req, res) => {
 const response = await fetch(`https://www.eventbriteapi.com/v3/organizers/${req.params.organizerId}/`, {
    headers: {
      'Authorization': `Bearer ${oauthToken}`,
      'Content-Type': 'application/json'
    }
 });
 const data = await response.json();
 res.json(data);
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});

