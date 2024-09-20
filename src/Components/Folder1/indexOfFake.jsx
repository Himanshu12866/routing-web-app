import axios from "axios"
import { useEffect, useState } from "react"
import ProductsApp from "../Fakestore/Products"
import { Link } from "react-router-dom"


export default function FakeOfIndex() {

    const [list, setList] = useState([])
    const [cate, setCate] = useState("All")

    function handleCategory(category) {
        setCate(category)
    }

    function handleAll(){
        setCate("All")
    }

    useEffect(() => {
       
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                setList(response.data)
            })
    })

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-sm bg-dark text-light m-3">
                <p className="navbar-brand text-light m-1 ms-3 fs-3"> Shopper.</p>
                <button className="navbar-toggler" data-bs-target="#idList" data-bs-toggle="collapse">
                    <span className="bi bi-list text-light"></span>
                </button>
                <div className="navbar-collapse collapse d-lg-flex justify-content-lg-between" id="idList">
                    <ol className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-light"  onClick={handleAll}>All</Link>
                    </li>
                        {
                            list.map(link => <li className="nav-item"> <Link onClick={() => handleCategory(link)} className="nav-link text-light" href="/">{link.toUpperCase()}</Link></li>)
                        }

                    </ol>
                    <ol className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="0"><span className="bi bi-heart fs-4"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="0"><span className="bi bi-cart3 fs-4"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="0"><span className="bi bi-person fs-4"></span></a>
                        </li>

                    </ol>

                </div>

            </nav>
            <ProductsApp cate={cate} />

        </div>
    )
}