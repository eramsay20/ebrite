
const LOAD = 'events/LOAD';
// const LOAD_ONE = 'events/LOAD_ONE';
// const LOAD_CATEGORY = 'events/LOAD_CATEGORY';

const load = events => ({
  type: LOAD,
  events,
});

// const loadOne = event => ({
//   type: LOAD_ONE,
//   event,
// });

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

// export const getEvent = (id) => async dispatch => {
//   const response = await fetch(`/api/events/${id}`); // check backend get route

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(loadOne(data.event));
//   }
// };


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
