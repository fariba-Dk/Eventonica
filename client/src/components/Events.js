import Users from './Users';
import React, { useState, useReducer } from 'react';

const event1 = {
  id: '1',
  name: 'Rock & Roll in the House',
  date: '2022-04-04',
  description: 'Park concert for local Rock bands',
  genre: 'Rock & Roll',
};

const event2 = {
  id: '2',
  name: 'Reaggea in the House',
  date: '2022-05-04',
  description: 'Park concert for local reaggea bands',
  genre: 'Reageton & Ziggy Marley',
};

const event3 = {
  id: '3',
  name: 'Jaz in the house',
  date: '2021-10-01',
  description: 'Ez listening with local Jaz Artists',
  genre: 'Jazzzzzzz',
};

//REDUCER takes two params
const reducer = (state, action) => { //the current state
  console.log(action, 'this is the action');
  switch (action.type) {
    case 'editName':
      console.log('Logged if the editName action is being dispatched');
      //action passed into dispatch action it's going to get set to action var and reducer will return our new updated state
      return { ...state, name: action.payload }; //return our state with new payload/data
    case 'editId':
      return { ...state, id: action.payload };

    case 'editDescription':
      return { ...state, description: action.payload };

    case 'editCategory':
      return { ...state, category: action.payload };

    case 'editDate':
      return { ...state, date: action.payload };

    case 'editGenre':
      return { ...state, genre: action.payload };

    default:
      return state;
  }
};

const Events = () => {
  const initialState = {
    id: '',
    name: '',
    date: '',
    description: '',
    genre: '',
  };

  const [events, setEvents] = useState([event1, event2, event3]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault(); // const newEvent = {initialState};
    setEvents([...events, state]); //state is the value of initial state
    console.log([...events, state]); //setEvent -> copying what is already there by using ...events
  };
  //  ========  RETURN OF THE COMPONENT IS HERE =============
  return (
    <section className='event-management'>
      <h2>Event Management</h2>
      <div>
        {/* MAP THRU ALL EVENTS and LIST THEM */}
        <h3>All Events</h3>
        <ul id='events-list'>
          {events.map((event, index) => (
            <li key={index}>
              {event.date}
              <br />
              {event.name}
              <br />
              {event.description}
              <br />
              {event.genre}
            </li>
          ))}
        </ul>

        {/* ADD EVENTS */}
        <h3>Add Event</h3>
        <form id='add-event' action='#' onSubmit={handleSubmit}>
          {/* ADD BY NAME */}
          <fieldset>
            <label>Name</label>
            <input
              type='text'
              id='add-event-name'
              placeholder='Virtual corgi meetup'
              value={state.name}
              onChange={(e) =>
                dispatch({ type: 'editName', payload: e.target.value })
              }
            />
          </fieldset>
          {/* ADD BY date */}
          <fieldset>
            <label>Date</label>
            <input
              type='date'
              id='add-event-date'
              value={state.date}
              onChange={(e) =>
                dispatch({ type: 'editDate', payload: e.target.value })
              }
            />
          </fieldset>

          {/* ADD BY id */}
          <fieldset>
            <label>Id</label>
            <input
              type='number'
              id='add-event-id'
              value={state.id}
              onChange={(e) =>
                dispatch({ type: 'editId', payload: e.target.value })
              }
            />
          </fieldset>

          {/* ADD BY Description */}
          <fieldset>
            <label>Description</label>
            <input
              type='text'
              id='add-event-description'
              value={state.description}
              onChange={(e) =>
                dispatch({ type: 'editDescription', payload: e.target.value })
              }
            />
          </fieldset>

          {/* ADD BY GENRE */}
          <fieldset>
            <label>Genre</label>
            <input
              type='text'
              id='add-event-genre'
              value={state.genre}
              onChange={(e) =>
                dispatch({ type: 'editGenre', payload: e.target.value })
              }
            />
          </fieldset>

          <input type='submit' />
        </form>
      </div>
    </section>
  );
};
export default Events;
/*

  //in []
  //state is the initial state bc in an obj
  //dispatch is a function that we call in order to update our state -> calls the reducer function, given certain params
  //useReducer takes in two params
  //reducer -> a function that we perform on our state to get new state
  //an object with an initial state

  id: '',
// name: '',
// date: '',
// description: '',
*/ category: '',
