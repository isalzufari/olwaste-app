import './App.css';
import { ButtonSucces, Navbar, CardProduct, CardUser } from './components/components';

function App() {
  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <div className='row'>
          <div className='col-sm-3'>
            <CardProduct />
          </div>
          <div className='col-sm-3'>
            <CardUser />
          </div>
        </div>
      
        <ButtonSucces />
      </div>
    </>
  );
}

export default App;
