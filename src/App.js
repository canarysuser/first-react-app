
import Home from './ui/Home';
import ProductHome from './products/productHome';
import SiteHeader from './ui/siteheader';
import SiteFooter from './ui/sitefooter';
import { Routes, Route } from 'react-router';
import PageNotFound from './ui/PageNotFound';
import ProductListRouted from './routed/productListRouted';
import ProductDetailsRouted from './routed/productDetailsRouted';
import LifecycleStages from './ui/lifecycleStages';
import MemoizedComponent from './ui/MemoizedComponent';

function App() {
 

  return (
    <>
    <SiteHeader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/lifecycle' element={<LifecycleStages/>}/>
        <Route path='/memos' element={<MemoizedComponent/>}/>
      <Route path='/products' element={<ProductHome/>}/>
      <Route path='/routed' element={<ProductListRouted/>}/>
      <Route path='/routed/:id' element={<ProductDetailsRouted/>}/>
      <Route path='/login' element={<h2>Login Component</h2>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <SiteFooter/>
    </>
    // This is the root element of the component
  //  <div className='container-fluid'> 
  //     <h2>Welcome to ReactJS </h2>
  //     <h5>Sub Header</h5>
  //   {/* <Home/> */}
  //   <ProductHome />
  //  </div>
   
  );
}

export default App;
