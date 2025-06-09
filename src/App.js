import logo from './logo.svg';
import './App.css';
import Home from './ui/Home';
import ProductHome from './products/productHome';


function App() {
 

  return (
    // This is the root element of the component
   <div className='container-fluid'> 
      <h2>Welcome to ReactJS </h2>
      <h5>Sub Header</h5>
    {/* <Home/> */}
    <ProductHome />
   </div>
   
  );
}

export default App;
