import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurBeers from './components/OurBeers';
import ScreenTwo from './components/ScreenTwo';

function App() {
  return (
    <div>
      <div style={{ background: 'linear-gradient(180deg, #014379 5%, rgba(2, 103, 181, 1) 100%)' }} className='h-lvh px-8'>
        <Navbar />
        <Home />
      </div>
      <div className='h-lvh px-8 bg-[#00ACC7]'>
        {/* <Home /> */}
        <ScreenTwo />
      </div>

      <div style={{ background: 'linear-gradient(180deg, #014379 5%, rgba(2, 103, 181, 1) 100%)' }} className='h-[103vh] px-8'>
        <OurBeers />
      </div>

    </div>

  );
}

export default App;
