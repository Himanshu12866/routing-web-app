import { BrowserRouter, Route, Routes } from "react-router-dom";

import FileProducts1 from "./fileProducts";
import LayOut from "./layout";
import Home from "./fileHome1";
import ChildProducts from "./fileChild";



export default function FileIndex1() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayOut />}>
                        <Route path="" exact element={<Home />} />
                        <Route path="products/:item" element={<FileProducts1 />}>
                            <Route path=":id"  element={<ChildProducts/>}/>
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}