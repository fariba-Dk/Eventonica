import calendar from './calendar.png';
import './App.css';
import Footer from './components/Footer';
import Users from './components/Users';
import Events from './components/Events';
import DeleteUser from './components/DeleteUser';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={calendar} alt='Calendar image' />
        <h1>Eventonica Calendar </h1>
      </header>
      <main>
        <div className='user-and-events'>
          <Users />
          <Events />
        </div>
        <div>
          <aside className='search-toolbar'>
            <div>
              <h3>Find Events</h3>
              <form id='search' action='#'>
                <fieldset>
                  <label htmlFor='date-search'>Date</label>
                  <input
                    type='text'
                    id='date-search'
                    placeholder='YYYY-MM-DD'
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor='category-search'>Category</label>
                  <input type='text' id='category-search' />
                </fieldset>

                <input type='submit' value='Search' />
              </form>
            </div>
          </aside>
        </div>
        <div>
          {' '}
          <h3>Delete Event</h3>{' '}
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
      </main>
      <footer>
        {' '}
        <div>
          {' '}
          Star Calendar favicon made by{' '}
          <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            {' '}
            Freepik{' '}
          </a>{' '}
          Find your own on{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            {' '}
            FlatIcon.com{' '}
          </a>{' '}
        </div>{' '}
      </footer>{' '}
    </div>
  );
}
export default App;
