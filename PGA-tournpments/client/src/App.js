import calendar from './calendar.png';
import './App.css';
import Users from './components/Users';
import Events from './components/Events';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <header>
        <img src={calendar} alt='Calendar'/>
        <h2>PGA & LPGA Tournament Calendar of Events for 2022
        </h2>
      </header>

      <main>
        <div className='user-and-events'>
          <aside className='search-toolbar'>
          {' '}
          <div>
            {' '}
            <h3>Find Events</h3>{' '}
            <form id='search' action='#'>
              {' '}
              <fieldset>
                {' '}
                <label htmlFor='date-search'>Date</label>{' '}
                <input type='text' id='date-search' placeholder='YYYY-MM-DD' />{' '}
              </fieldset>{' '}
              <fieldset>
                {' '}
                <label htmlFor='category-search'>Category</label>{' '}
                <input type='text' id='category-search' />{' '}
              </fieldset>
              <input type='submit' value='Search' />{' '}
            </form>{' '}
          </div>{' '}
        </aside>{' '}

          <Events />
        </div>

        <div className="delete-users">
          <h3>Delete Event</h3>{ ' ' }
          <form id='delete-event' action='#'>
            {' '}
            <fieldset>
              {' '}
              <label>Event ID</label>{' '}
              <input type='number' min='1' id='delete-event-id' />{' '}
            </fieldset>{' '}
            <input type='submit' />{' '}
          </form>{' '}
        </div>
<Users/>


        </main>
      <Footer />{' '}
    </div>
  );
}
export default App;
