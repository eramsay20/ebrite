![banner](https://github.com/eramsay20/eBrite/blob/master/wiki-resources/eBrite-banner-1.png?raw=true)

## Welcome to e.brite!
***e.brite*** is a clone of [eventbrite](https://www.eventbrite.com/) that focuses on connecting people through virtual, online events. Users come to the site to find free and paid virtual events including concerts, online gaming or networking activities.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

Learn more about this project by visiting the wiki page, [here!](https://github.com/eramsay20/ebrite/wiki)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

The goal of this week long project was to have 3 fully functional core MVP features finished. Fortunately, I was able to implement all 4 core MVPs, as well as an addition bonus feature, the search bar. 

From the images below, you'll see I tried to closely mirror Eventbrites live website in terms of display and user experience. With regards to the top half of the main page, I used an online color dropping tool to deduce eventbrites exact hex color patterns for use accross my site. I also used a premium Canva account to recreate the welcome image banner in a similar style. 

### Main Page - Header - Banner & Nav
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/main.png?raw=true)

Below the welcome banner, Eventbrite lists a number of hoverable categories, which when clicked will dynamically update the event cards displayed below it. I was also able to implement this feature, leveraging a Category table and categoryId on the Events table. By pulling in all events from my database and into my event slice of state, I was able to easily filter my events into categories, and leverage useState to adjust the category depending on what the user selects. I also added the same blue highlight and hover css properties as the main website. 

### Main Page - Body - Event Card Display
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-card-display.png?raw=true)

Here is a snippet of the code component implementation for the main page:
![Main-Frontend-Code](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/main-header-event-display.png?raw=true)

Since all the rendered event cards are clickable, I also made an Event page that will populate relevant info for a selected event. Each of the event cards displayed on the main page are actually NavLinks, which will internally switch the route from the main page ('/') to the event page ('/events/:id'), capturing the event's id in the Route path such that useParams can extract and render the relevant information. 

### Event Page 
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-page.png?raw=true)

I initially planned on having a separate registration form page for when user's click "Register" from the event page, but the user interface was so simplistic (only selecting a ticket count and confirming the registration fee) that I decided to make it into a modal instead since I had time. 

### Event Registration Modal
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-reg-modal.png?raw=true)

One of the trickier features to implement, both from a CSS perspective and a functionality perspective, was the action of favoriting an event when logged in. For this I had to create two custom images to display depending on whether a card was selected as a favorite. I then created two callbacks to handle click events: one to fire an 'addFavorite' thunk when clicked, an other to fire a 'removeFavorite' thunk when clicked again after already being favorited (each with their own respective action creators, thunks, backend routes, and reducer handlers). I would also have to update the users favorite events state and rerender in the display on any changes such that whenever a user navigates back to the home page they can see which events they've already favorited when browsing.

### Favorite Events
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/favoriting-events.png?raw=true)

![favorite-code-1](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/event-card-top-favorite-logic.png?raw=true)

![favorite-code-2](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/event-card-bottom-favorite-logic.png?raw=true)

After registering or favoriting events, I needed a place to showcase the events a user engaged with to satisfy the 'Bookmark' MVP requirement. I chose to house these on the user's profile page, which is split into a settings section on the left, and an events section on the right using a custom grid layout. I also had to make new components for user-specific event cards displayed in the profile page in order to appropriately scale them to fit the container and add buttons to easily cancel registration or remove them from favorites. 

### User Profile
![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/profile.png?raw=true)
