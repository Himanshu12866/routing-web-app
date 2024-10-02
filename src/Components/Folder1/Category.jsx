

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function CategoryApp() {
    const [products, setProducts] = useState([])

    let params = useParams()
    useEffect(() => {
        // console.log
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(response => {
                setProducts(response.data)
            })

            // console.log(products)
    }, [params.category])

    return (
        <div className="container d-flex flex-wrap p-2">
            {
                products?.map(product =>
                    <div key={product.id} className="card m-1 p-1" style={{ width: "250px", height: "500px" }}>
                        <img className="card-img-top" alt={product.id} style={{ width: "100%", height: "200px" }} src={product.image}></img>
                        <div className="card-header">
                            <p className="fw-bold">{product.price.toLocaleString("en-in", { "style": "currency", currency: "INR" })}</p>
                        </div>
                        <div className="card-body">
                            <p>{product.title}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success w-100 my-2"><span className="bi bi-eye"></span>Veiw Details</button>
                            <button className="btn btn-dark w-100"><span className="bi bi-cart"></span> Add To Cart</button>

                        </div>
                    </div>
                )
            }
        </div>
    )
}