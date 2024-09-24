import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"


export default function FileProducts1() {
    const [products, setProducts] = useState([{
        itd: 0,
        title: "",
        price: 0,
        image: "",
        description: "",
        rating: {
            rate: 0,
            count: 0
        }
    }])
    let params = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.item}`)
            .then(response => {
                setProducts(response.data)
            })
    }, [params.item])

    return (
        <div className="d-flex flex-wrap text-center  m-2 p-2" style={{ height: "auto", backgroundColor: "black" }}>
            {(params.id) ? (<Outlet />) : (

                products.map(product =>
                    <div className="card m-2 " key={product} style={{ width: "260px", height: "500px" }}>
                        <div className="text-center p-1">
                            <img style={{ width: "200px", height: "200px", mixBlendMode: "multiply" }} src={product.image} alt={product.id} />
                        </div>
                        <div className="card-header" style={{ height: "100px" }}>
                            <p style={{ fontSize: "12px" }}>{product.title}</p>
                            <p className="fw-bold"> {product.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}</p>
                        </div>
                        <div className="card-body bg-dark" >
                            <div className="d-flex justify-content-between" >
                                <p className="text-light" style={{ fontSize: "14px" }}><span className="badge bg-primary bi bi-star-fill">&nbsp;{product.rating.rate}</span> Ratings</p>
                                <p className="text-light" style={{ fontSize: "14px" }}><span className="badge bg-success bi bi-people-fill">&nbsp;{product.rating.count}</span>&nbsp;Reviews</p>
                            </div>

                            <Link to={`/products/${params.item}/${product.id}`} className="btn btn-danger w-100"><span className="bi bi-eye"> </span>&nbsp;View</Link>

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning w-100"> Add to Cart</button>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}