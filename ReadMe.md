![banner](https://github.com/eramsay20/eBrite/blob/master/wiki-resources/eBrite-banner-1.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Project Overview

***e.brite*** is a clone of [eventbrite](https://www.eventbrite.com/) that focuses on connecting people through virtual, online events. Users come to the site to find free and paid virtual events including concerts, online gaming or networking activities. The goal of this week long, full-stack project was to have 3 fully functional core MVP features finished. The MVP requirements and stretch goals I was able to meet in my weeklong time allotment are as follows:

### Core
- Events - display clickable event cards with summary info
- Categories - have multiple categories to choose from
- Registration (tickets) - ability to register for an event
- Bookmarks - allow users to save bookmarks/favorites events they are interested in

### Bonus/Stretch
- Search Functionality
- Refactor all forms (login, signup, event registration) into popup modals

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Main Page - Header - Banner & Nav
From the images below, you'll see I tried to closely mirror Eventbrites live website in terms of display and user experience. With regards to the top half of the main page, I used an online color dropping tool to deduce eventbrites exact hex color patterns for use accross my site. I also used a premium Canva account to recreate the welcome image banner in a similar style. The nav bar features a custom logo that redirects to the home page, a search bar, login/signup modals when not logged in and profile/signout options when logged in. 

![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/main.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Main Page - Body - Event Card Display (MVP reqs #1 & #2)
Below the welcome banner, Eventbrite lists a number of hoverable categories, which when clicked will dynamically update the event cards displayed below it. I was also able to implement this feature, leveraging a Category table and categoryId on the Events table. By pulling in all events from my database (include Category) and into my event slice of state, I was able to grab the categories from my events and leverage useState to adjust the selected category depending on what the user selects. I also added a similar blue highlight and hover css properties as the main website. 

![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-card-display.png?raw=true)

Here is a snippet of the code component implementation for the main page:
![Main-Frontend-Code](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/main-header-event-display.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Event Page 
Since all the rendered event cards are clickable, I also made an Event page that will populate relevant info for a selected event. Each of the event cards displayed on the main page are actually NavLinks, which will internally switch the route from the main page ('/') to the event page ('/events/:id'), capturing the event's id in the Route path such that useParams can extract and render the relevant information. 

![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-page.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Event Registration Modal (MVP #3)
I initially planned on having a separate registration form page for when user's click "Register" from the event page, but the user interface was so simplistic (only selecting a ticket count and confirming the registration fee) that I decided to make it into a modal instead since I had time. 

![Registration](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/event-reg-modal.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Favorite Events (MVP #4)
One of the trickier features to implement, both from a CSS perspective and a functionality perspective, was the action of favoriting an event when logged in. For this I had to create two custom images to display depending on whether a card was selected as a favorite. I then created two callbacks to handle click events: one to fire an 'addFavorite' thunk when clicked, an other to fire a 'removeFavorite' thunk when clicked again after already being favorited (each with their own respective action creators, thunks, backend routes, and reducer handlers). I would also have to update the users favorite events state and rerender in the display on any changes such that whenever a user navigates back to the home page they can see which events they've already favorited when browsing.

![Favorites](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/favoriting-events.png?raw=true)

![favorite-code-1](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/event-card-top-favorite-logic.png?raw=true)

![favorite-code-2](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/event-card-bottom-favorite-logic.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### User Profile 
After registering or favoriting events, I needed a place to showcase the events a user engaged with to satisfy the 'Bookmark' MVP requirement. I chose to house these on the user's profile page, which is split into a settings section on the left, and an events section on the right using a custom grid layout. I also had to make new components for user-specific event cards displayed in the profile page in order to appropriately scale them to fit the container and add buttons to easily cancel registration or remove them from favorites. 

![Main](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/profile.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Search Bar (BONUS #5)
Lastly, as a bonus feature, I opted to make the search bar placeholder functional and render a Results page with filtered event cards whose titles match the search query string. Images and code below. 

![Search](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/eventbrite-comparison/search-results.png?raw=true)
![Search-Code](https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite-code-snippets/frontend/search-frontend.png?raw=true)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

Learn more about this project by visiting the wiki page, [here!](https://github.com/eramsay20/ebrite/wiki)
