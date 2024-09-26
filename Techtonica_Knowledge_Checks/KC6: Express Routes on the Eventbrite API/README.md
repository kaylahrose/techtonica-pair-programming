### SetUp
You will complete this assignment locally and share a link to a PR in your GitHub

### Task

#### Step 1: Sign up for Eventbrite API
https://www.eventbrite.com/platform/ - populate your own API key. Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token

#### Step 2: Set Up Your Express Application
First, initialize a new Node.js project and install Express and node-fetch for making HTTP requests.
```
npm init -y
npm install express node-fetch
```

#### Step 3: Create Your Express Routes
Create a file named app.js and set up your Express application with routes for each of the following five Eventbrite API endpoints: users, events, ticket classes, orders, venues, and organizers.

- **Friday, August 23, 2024:** It looks like some of pieces of information we request in this KC6 when searching for public events have been deprecated ([By Category](https://eventbrite.com/platform/docs/by-category), [By Date](https://www.eventbrite.com/platform/docs/by-date), [By Location](https://www.eventbrite.com/platform/docs/by-location))
- **Friday, August 23, 2024:** Please try to see if you are able to get [endpoint expansion details](https://www.eventbrite.com/platform/docs/events) such as venue, organizer, category, etc (5 items); The objective is to work with the response object and share how you are able to display different pieces of information. If the API requires that data from your own account, create a dummy event. You can also, try making the ticket-expansion example call from the **"Using Expansions to Get Information on an Event"** section, to check to make sure that you are getting a response.

#### Step 4: Start your app using `node app.js`

#### Step 5 [BONUS]: Connect to a Frontend
To connect your Express application to a frontend, you can use any frontend framework or library (e.g., React, Vue, Angular) to make HTTP requests to your Express routes. 

If your frontend is in React, add a proxy value to your `package.json` file pointing to your Express server's URL. This tells the development server to proxy any unknown requests to your Express server.

#### 
#### 
#### 

