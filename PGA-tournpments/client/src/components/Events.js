import Users from './Users';
import React, { useState, useReducer } from 'react';

const events = [
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
    location: '',
    category:''
  };

  const [ events, setEvents ] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault(); // const newEvent = {initialState};
    setEvents([...events, state]); //state is the value of initial state
    console.log([...events, state]); //setEvent -> copying what is already there by using ...events
  };
  //  ========  RETURN OF THE COMPONENT IS HERE =============
  return (
    <section className='event-management'>
      <h2>Golf Tournament</h2>

        {/* MAP THRU ALL EVENTS and LIST THEM */}
        <h4>Events</h4>
        <ul >
          {events.map((event, index) => (
            <li key={index}>
              {event.name}
              <br />
              {event.location}
              <br />
              {event.description}
              <br />
              { event.category }
               <br />
              {event.date}
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
              id='id'
              placeholder='tbd'
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
              id='date'
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
              id='id'
              value={state.description}
              onChange={(e) =>
                dispatch({ type: 'editDescription', payload: e.target.value })
              }
            />
          </fieldset>

          {/* ADD BY GENRE */}
          <fieldset>
            <label>Category</label>
            <input
              type='text'
              id='category'
              value={state.category}
              onChange={(e) =>
                dispatch({ type: 'editCategory', payload: e.target.value })
              }
            />
          </fieldset>

          <input type='submit' />
        </form>
  
    </section>
  );
};
export default Events;


