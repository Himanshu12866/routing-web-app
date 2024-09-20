import { BrowserRouter, Routes, Route } from "react-router-dom";
import FakeOfIndex from "./indexOfFake";
import CategoryApp from "./Category";

export default function RouteApp(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FakeOfIndex />} />
                    <Route path="products/:category" element={<CategoryApp/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}