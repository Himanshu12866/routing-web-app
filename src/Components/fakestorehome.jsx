


// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";


// export default function FakestoreHome() {

//     const [category, setCategory] = useState([])
//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products/categories')
//             .then(response => {
//                 setCategory(response.data)
//             })
//     }, [])


//     return (
//         <div className="contianer">
//             <nav className="navbar navbar-expand-sm ">
//                 <p className="navbar-brand fs-3 fw-bold"> Shopper.</p>
//                 <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse">
//                     <span className="bi bi-list"></span> </button>
//                 <div className="navbar-collapse collapse  d-flex justify-content-between" id="list">
//                     <ol className="navbar-nav">
//                         {
//                             category.map((cat, index) =>
//                                 <li className="nav-item" index={index}>
//                                     <Link to={`products/${cat}`} className="nav-link fw-bold">{cat.toUpperCase()}</Link>
//                                 </li>
//                             )
//                         }
//                     </ol>
//                     <ol className="navbar-nav">

//                         <li className="nav-item">
//                             <span className="nav-link bi bi-heart-fill fs-5"></span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link bi bi-cart-fill fs-5"></span>
//                         </li>
//                         <li className="nav-item">
//                             <span className="nav-link bi bi-person-fill fs-5"></span>
//                         </li>
//                     </ol>

//                 </div>
//             </nav>
//         </div>
//     )
// }
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
        })

    },[])

    return(
        <div>
            <h2>Fakestore Home</h2>
            <ul className="list-unstyled">
                {
                    categories.map(category=>
                        <li key={category}> <Link className="btn btn-dark w-25 my-2" to={`/products/${category}`}>{category.toUpperCase()}</Link> </li>
                    )
                }
            </ul>
        </div>
    )
}