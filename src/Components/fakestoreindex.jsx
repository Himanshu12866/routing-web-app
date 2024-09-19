// import { Link } from "react-router-dom";
// import FakestoreHome from "./fakestorehome";

// export default function Home(){


//     return (
//         <div>
        
//         <Link to="/">{<FakestoreHome/>}</Link>  </div>
//     )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FakestoreDetails } from "./fakestore-detaisl";
import { FakestoreHome } from "./fakestorehome";
import { FakestoreProducts } from "./fakestoreproducts";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h2>Fakestore</h2>
                </header>
                <section className="mt-3">
                    <Routes>
                        <Route path='/' element={<FakestoreHome />} />
                        <Route path='products/:category' element={<FakestoreProducts />}>
                            <Route path='details/:id' element={<FakestoreDetails />} />
                        </Route>
                        
                        <Route path="*" element={<h2 className="text-danger">Not Found</h2>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}