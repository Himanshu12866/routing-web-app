
// import { BrowserRouter, Routes , Route } from "react-router-dom";
// import FakestoreHome from "./Components/fakestorehome";
// import FakeStoreProducts from "./Components/fakestoreproducts";
// import { FakestoreIndex } from "./Components/fakestoreindex";
// import Fakeindex from "./Route/fakeindex";
// import FakeStore from "./Components/fakestoreindex";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexFake from "./Components/Fakestore/FakeIndex";
import CatProducts from "./Components/Fakestore/CatProducts";


function App() {
  return (
    <div className="App">
  {/* <FakestoreIndex/> */}
      {/* <Fakeindex/> */}
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<IndexFake/>}/>
          <Route path="/products/:category" element={<CatProducts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
