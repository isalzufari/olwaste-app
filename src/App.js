import { Navbar, Footer } from './components/components';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
