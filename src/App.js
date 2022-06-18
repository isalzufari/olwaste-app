import { Navbar, Footer } from './components/components';
import DetailProduct from './pages/DetailProduct';

function App() {
  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <DetailProduct />
      </div>
      <Footer />
    </>
  );
}

export default App;
