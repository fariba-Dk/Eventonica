import calendar from './calendar.png';
import './App.css';
import Users from './components/PGA/Users';
import Events from './components/PGA/Events';


function AppUser() {
  return (
    <>


    <div className='App'>

      <header>
        <img src={calendar} alt='Calendar image' />
        <h1> 🏆 PGA 🏆</h1>
      </header>
      <main className='user-and-events'>

          <Users />
          <Events />
      </main>
      <footer>
        {' '}
        <div>
          <a href='https://www.faribacodes' >
          </a>
        </div>{' '}
      </footer>{' '}
      </div>
    </>
  );
}
export default AppUser;
