import './App.css';
// import Navbar from './components/navbar/Navbar';
// import { Routes, Route } from "react-router-dom"

import OrderPage from './components/navbar/orderPage/OrderPage';

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="services" element={ <OrderPage/> } />
      </Routes> */}
      <OrderPage/>
    </>
  );
}

export default App;
