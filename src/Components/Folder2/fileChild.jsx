import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChildProducts() {

    const [product, setProduct] = useState([{
        it: 0,
        title: "",
        price: 0,
        image: "",
        description: "",
        rating: {
            rate: 0,
            count: 0
        },
        category: ""
    }])
    let params = useParams()
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data)
            })
    }, [product, params.id])
    return (
        <div className="detailsBox" style={{ textAlign: "left" }}>
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-lg-6 col-sm-12">
                    <img alt="" src={product.image} style={{ height: "500px", width: "100%", borderRadius: "20px" }}></img>
                </div>
                <div className="col-lg-6 col-sm-12" >
                    <div style={{ textAlign: "left" }}>
                        <h3 className="text-light">{product.title}</h3>
                        <h4 className="text-light"> <span className="fs-4">₹</span>{product.price} .00</h4>
                    </div>
                    <p className="text-light">
                        <span className="bi bi-tag-fill text-success ">

                        </span> &nbsp;
                        {/* {product.category.toUpperCase()} */}
                    </p>
                    <p className="text-light">
                        <i> {product.description}</i>
                    </p>
                    <div className="row" style={{ marginTop: "22%" }}>
                        <div className="col-4">
                            <button className="btn btn-danger w-100 p-3">Add To Cart</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-success w-100 p-3">Buy Now</button>
                        </div>
                        <div className="col-4">
                        <Link className="text-light btn btn-danger w-100 p-3" to={`/`}>Go Back to Home</Link>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}