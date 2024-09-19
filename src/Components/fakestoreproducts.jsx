// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";



// export default function FakeStoreProducts(){
//     let params = useParams();
//     const [ products,setProducts] = useState([
//         {
//             id:0,
//             title:"",
//             price:0,
//             description:"",
//             image:"",
//             category:"",
//             rating: {
//                 rate:0,
//                 count:0
//             }
//         }
//     ])

//     useEffect(() =>{
//         axios.get(`https://fakestoreapi.com/products/category/${params.cat}`)
//         .then(response => {
//             setProducts(response.data)

//         })
//     }, [params.cat])

//     return (
//         <div className="m-1 p-1 text-center">
//         <h1>Products</h1>
//         <div className="d-flex flex-wrap">
//         {
//             products.map(product => 
//             <div className="card m-1 p-1" style={{width:"250px" , height:"500px"}}>
//                 <img src={product.image} className="card-img-top" alt={product.id}></img>
//                 <div className="card-header">
//                     <p>{product.title}</p>
//                     <p className="fw-bold">{product.price.toLocaleString('en-in', {
//                         style:"currency",
//                         currency:"INR"
//                     })}</p>
//                 </div>
//                 <div className="car-body">
//                 <span>{product.description}</span>
//                 </div>
//                 <div>
//                 <span className="badge rounded bi bi-star-fill bg-primary">{product.rating.rate}</span>
//                 <span className="badge rounded bi bi-star-fill bg-primary">{product.rating.count}</span>
//                 </div>
//             </div>
//             )
//         }

//         </div>
//         <Link to="/">{<h1>Back To Home</h1>}</Link>

//         </div>
//     )
// }
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, Outlet, useParams } from "react-router-dom";


export function FakestoreProducts()
{
    let params = useParams();

    const [products, setProducts] = useState([{id:0, title:'', image:'', price:0, description:'', category:'', rating:{rate:0, count:0}}]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[params.category])

    return(
        <div>
            <h3>Products</h3>
            <div className="row">
                <div className="col-4">
                        <div className="d-flex flex-wrap">
                        {
                            products.map(product=>
                                <div className="card p-2 m-2" style={{width:'100px'}}>
                                    <img src={product.image} height="100" alt="asdda" className="card-img-top" />
                                    <div className="card-header">
                                        <Link to={`details/${product.id}`} className="btn btn-warning"> View </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Link to="/">Back to Home</Link>
                    </div>
                    </div>
                <div className="col-8">
                        <Outlet />
                </div>  
            </div>
        </div>
    )
}