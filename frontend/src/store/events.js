import { csrfFetch } from '../store/csrf';

const LOAD_EVENTS = 'events/LOAD_EVENTS';
const LOAD_REGISTERED = 'events/LOAD_REGISTERED';
const LOAD_FAVORITES = 'events/LOAD_FAVORITES';
const REGISTER = 'events/REGISTER';
const UNREGISTER = 'events/UNREGISTER';
const UNFAVORITE = 'events/UNFAVORITE';


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

const unregister = eventId => ({
  type: UNREGISTER,
  eventId,
});

const unfavorite = eventId => ({
  type: UNFAVORITE,
  eventId,
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


// DELETE registered events
export const unregisterEvent = (eventId) => async dispatch => {
  const response = await csrfFetch(`/api/events/${eventId}/registration`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const unregisteredId = await response.json();
    console.log(unregisteredId);
    dispatch(unregister(unregisteredId));
  }
};

// DELETE favorite events
export const unfavoriteEvent = (eventId) => async dispatch => {
  const response = await csrfFetch(`/api/events/${eventId}/favorites`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const unfavoriteId = await response.json();
    dispatch(unfavorite(unfavoriteId));
  }
};


const initialState = {
  eventsList: [],
  registered: [],
  favorites: [],
};

const eventsReducer = (state = initialState, action) => {
  let newState;

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
    case UNREGISTER: {
      newState = {...state}; // copy state into new obj
      // delete newState[action.eventId]; // delete unregistered event from state

      // update registered list by filtering for all BUT the unregistered event id
      const newRegistered = newState.registered.filter(event => event.id.toString() !== action.eventId.toString());

      newState.registered = newRegistered;
      return newState;
    }





    // case UNFAVORITE: {
    //   newState = {...state}; // copy state into new obj
    //   delete newState[action.eventId]; // delete unregistered event from state

    //   // update registered list by filtering for all BUT the unregistered event id
    //   newState.favorites = newState.favorites.filter(event => {
    //       console.log('MAPEVENT EVENT >>>>>>>', event);
    //       return event.id.toString() !== action.eventId.toString()
    //     });

    //   return newState;
    // }
    default:
      return state;
  }
}

export default eventsReducer;

// new State = {}
//
