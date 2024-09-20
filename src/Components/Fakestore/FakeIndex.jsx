import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function IndexFake(){
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category")
        .then(response => {
            setList(response.data)
        })
    })
    
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="products">Shopper.</a>
            <button className="navbar-toggle" data-bs-target="#items">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="products">
            <ol className="navbar-nav">
                {
                    list.map(item => <li className="nav-item" key={item}>
                        <Link to= "/productd/:list">{list.toUpperCase()}</Link>
                    </li>)
                }
            </ol>

            </div>
        </nav>


        </div>
    )
}