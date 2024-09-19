import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export  function FakestoreDetails(){

    let params = useParams();

    const [product, setProduct] = useState({id:0, title:'', image:'', price:0, description:'', category:'', rating:{rate:0, count:0}});


    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })

    },[params.id])

    return(
        <div>
            <h3>Details</h3>
            <dl style={{width:'300px'}}>
                <img src={product.image} height="200" width="200" />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>

        </div>
    )
}