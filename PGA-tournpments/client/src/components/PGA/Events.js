import Users from './Users';
import React, { useState, useReducer } from 'react';

const tours = [
  {
    id: '1',
    name: 'U.S. Open',
    date: '2022-06-14',
    location: 'Muirfield Village Golf Club, Dublin, OH',
    description: 'Park concert for local Rock bands',
    category: 'LPGA, Women golf'
  },
 {
    id: '2',
    name: 'U.S. Open',
    date: '2022-06-14',
    location: 'The Renaissance Club, North Berwick',
    description: 'Park concert for local Rock bands',
    category: 'PGA, Men golf'
  },
 {
    id: '3',
    name: 'Barbasol Championship',
    date: '2022-06-14',
    location: 'Keene Trace Golf Club, Nicholasville, KY',
    description: "Gorgous 18 holes with difficulty of 5",
    category: 'Jr., Junior golf'

  },
  {
    id: '4',
    name: 'FEDEX CUP',
    date: '2023-10-01',
    location: 'Detroit Golf Club',
    description: '18 holes with 8 diffculty level, MI. Purse: $8,400,000',
    category: 'PGA, Men golf'

  },
 {
    id: '5',
    name: 'BMW Championship',
    date: '2021-10-02',
    location: "Wilmington Country Club,  Wilmington,  DE ",
    description: 'Purse: $15, 000, 000"',
    category: 'PGA, Men golf'

  }
]



export const Events = () => {
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

  const initialState = {
    id: '',
    name: '',
    date: '',
    description: '',
    genre: '',
  };

  const [events, setEvents] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault(); // const newEvent = {initialState};
    setEvents([...events, state]); //state is the value of initial state
    console.log([...events, state]); //setEvent -> copying what is already there by using ...events
  };
  //  ========  RETURN OF THE COMPONENT IS HERE =============
  return (
    <section className='event-management'>
    <navbar>
      <div>
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        </a>
        <a href="https://www.flaticon.com/" title="Flaticon">
        </a>
      </div>
    </navbar>
      <h2>PGA Tournaments Events </h2>
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
              { event.location }
               <br />
              {event.category}
            </li>
          ))}
        </ul>

        {/* ADD EVENTS */}
        <h3>Add an Event</h3>
        <form id='add-event' action='#' onSubmit={handleSubmit}>
          {/* ADD BY NAME */}
          <fieldset>
            <label>Name of Event</label>
            <input
              type='text'
              id='add-event-name'
              placeholder='jr games'
              value={state.name}
              onChange={(e) =>
                dispatch({ type: 'editName', payload: e.target.value })
              }
            />
          </fieldset>
          {/* ADD BY date */}
          <fieldset>
            <label>Date of Event</label>
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
            <label>Event Id</label>
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
            <label>Course Description</label>
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
            <label>Event Category</label>
            <input
              type='text'
              id='add-event-category'
              value={state.category}
              onChange={(e) =>
                dispatch({ type: 'editCategory', payload: e.target.value })
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

