import { csrfFetch } from '../store/csrf';

const LOAD_EVENTS = 'events/LOAD_EVENTS';
const LOAD_REGISTERED = 'events/LOAD_REGISTERED';
const LOAD_FAVORITES = 'events/LOAD_FAVORITES';
const REGISTER = 'events/REGISTER';
// const LOAD_CATEGORY = 'events/LOAD_CATEGORY';

const loadEvents = events => ({
  type: LOAD_EVENTS,
  events,
});

const loadRegistered = registered => ({
  type: LOAD_REGISTERED,
  registered,
});

const loadFavorites = favorites => ({
  type: LOAD_FAVORITES,
  favorites,
});

const register = event => ({
  type: REGISTER,
  event,
});

//GET all events
export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events/`); // check backend get route

  if (response.ok) {
    const data = await response.json();
    dispatch(loadEvents(data.events));
  }
};

// GET registered events
export const getRegistered = () => async dispatch => {
  const response = await fetch(`/api/events/registrations`); // check backend get route

  if (response.ok) {
    const registered = await response.json();
    dispatch(loadRegistered(registered));
  }
};

// GET favorite events
export const getFavorites = () => async dispatch => {
  const response = await fetch(`/api/events/favorites`); // check backend get route

  if (response.ok) {
    const favorites = await response.json();
    dispatch(loadFavorites(favorites));
  }
};


// POST add new registration to Registration table
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


const initialState = {
  eventsList: [],
  registered: [],
  favorites: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS: {
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
    case LOAD_REGISTERED: {
      return {
        ...state,
        registered: [...state.registered, ...action.registered]
      };
    }
    case LOAD_FAVORITES: {
      return {
        ...state,
        favorites: [...state.favorites, ...action.favorites]
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
