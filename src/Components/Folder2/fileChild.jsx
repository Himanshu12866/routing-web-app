import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChildProducts() {

    const [product, setProduct] = useState([{
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
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data)
            })
    })
    return (
        <div className="detailsBox">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <img alt="" src={product.image}></img>
                </div>
                <div className="col-lg-8 col-sm-12">

                </div>

            </div>

        </div>
    )
}