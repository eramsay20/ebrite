
const LOAD = 'events/LOAD';
const LOAD_CATEGORY = 'events/LOAD_CATEGORY';

const load = events => ({
  type: LOAD,
  events,
});

// const loadCategory = category => ({
//   type: LOAD_CATEGORY,
//   categories,
// });

export const getEvents = () => async dispatch => {
  const response = await fetch(`/api/events/`); // check backend get route

  if (response.ok) {
    const data = await response.json();
    dispatch(load(data.events));
  }
};


const sortEvents = (events) => {
  return events.sort((eventA, eventB) => eventA - eventB).map((event) => event.time);
};

const filterEventsByCategory = (events, categoryId) => {
  return events.filter(event => event.categoryId === categoryId);
};

const getEventsByCategory = (events, categoryId) => {
  return events.filter(event => event.categoryId === categoryId);
};

const initialState = {
  eventsList: [],
  categories: []
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
        // eventList: action.events,
      };
    }
    default:
      return state;
  }
}

export default eventsReducer;
