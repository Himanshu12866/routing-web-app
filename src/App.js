
import { BrowserRouter, Routes , Route } from "react-router-dom";
import FakestoreHome from "./Components/fakestorehome";


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
         <Route path="/" element={<FakestoreHome/>}/>
         <Route path="products/:category" element={<div>Home Page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    </div>
      
    </div>
  );
}

export default App;
