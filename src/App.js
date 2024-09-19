
import { BrowserRouter, Routes , Route } from "react-router-dom";
import FakestoreHome from "./Components/fakestorehome";
import FakeStoreProducts from "./Components/fakestoreproducts";
// import FakeStore from "./Components/fakestoreindex";


function App() {
  return (
    <div className="App">
    <div className='container-fluid'>
    <header className='text-light p-1 bg-dark m-1'>
      <h1 className='text-center'>Welcome to my React App</h1>
    </header>
    <div className="section">
      <BrowserRouter>
        <Routes>
         <Route path="/"  element={<FakestoreHome/>}></Route>
         <Route path={`products/category`} element={<FakeStoreProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>

    </div>
      
    </div>
  );
}

export default App;
