import { csrfFetch } from '../store/csrf';

const LOAD = 'events/LOAD';
const REGISTER = 'events/REGISTER';
// const LOAD_CATEGORY = 'events/LOAD_CATEGORY';

const load = events => ({
  type: LOAD,
  events,
});

const register = event => ({
  type: REGISTER,
  event,
});


export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events/`); // check backend get route

  if (response.ok) {
    const data = await response.json();
    dispatch(load(data.events));
  }
};

// getRegistered

// getFavorites

export const registerEvent = (payload) => async dispatch => {
  const eventId = payload.id;
  const ticketCount = parseInt(payload.ticketCount, 10);

  const response = await csrfFetch(`/api/events/${eventId}/registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ ticketCount }),
  }); // check backend get route

  if (response.ok) {
    const event = await response.json();
    dispatch(register(event));
  }
};


// const sortEvents = (events) => {
//   return events.sort((eventA, eventB) => eventA - eventB).map((event) => event.time);
// };

// const filterEventsByCategory = (events, categoryId) => {
//   return events.filter(event => event.categoryId === categoryId);
// };

// const getEventsByCategory = (events, categoryId) => {
//   return events.filter(event => event.categoryId === categoryId);
// };

const initialState = {
  eventsList: [],
  registered: [],
  favorites: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.events.forEach(event => {
        allEvents[event.id] = event;
      });
      return {
        ...allEvents,
        ...state,
        eventsList: action.events,
      };
    }
    case REGISTER: {
      return {
        ...state,
        registered: [...state.registered, action.event ]
      };
    }
    default:
      return state;
  }
}

export default eventsReducer;
