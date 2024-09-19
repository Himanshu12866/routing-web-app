import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



export default function FakeStoreProducts(){
    let params = useParams();
    const [ products,setProducts] = useState([
        {
            id:0,
            title:"",
            price:0,
            description:"",
            image:"",
            category:"",
            rating: {
                rate:0,
                count:0
            }
        }
    ])

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response => {
            setProducts(response.data)

        })
    }, [params.category])

    return (
        <div className="m-1 p-1 text-center">
        <h1>Products</h1>
        <div className="d-flex flex-wrap">
        {
            products.map(product => 
            <div className="card m-1 p-1" style={{width:"250px" , height:"500px"}}>
                <img src={product.image} className="card-img-top" alt={product.id}></img>
                <div className="card-header">
                    <p>{product.title}</p>
                    <p className="fw-bold">{product.price.toLocaleString('en-in', {
                        style:"currency",
                        currency:"INR"
                    })}</p>
                </div>
            </div>
            )
        }

        </div>
        <Link to="/">{<h1>Back To Home</h1>}</Link>

        </div>
    )
}