import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileHome1 from "./fileHome";



export default function FileIndex1(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FileHome1/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}