import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                setList(response.data)
            })
    })

    return (
        <div className="d-flex justify-content-center align-items-center position-relative" style={{ width: "100%", height: "80px" }}>
            {/* <img alt="nameshop" src="imageShop.jpg" style={{ width: "100%" }}></img> */}
            <div className="position-absolute" style={{ top: 0, width: "100%" }}>
                <nav className="navbar navbar-expand-lg bg-dark p-2">
                    <a className="navbar-brand text-light fs-3" href="/">Shopper.</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#links">
                        <span className="bi bi-list"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between " id="links">
                        <ul className="navbar-nav">
                            <li className="nav-item text-light">
                                <Link className="nav-link text-light" to="/">HOME</Link>
                            </li>
                            {
                                list.map(item => <li className="nav-item">
                                    <Link className="nav-link text-light" to={`products/${item}`}>{item.toUpperCase()}</Link>
                                </li>)
                            }
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <p className="nav-link"><span className="text-light fs-5 bi bi-heart"></span></p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link"><span className="text-light fs-5 bi bi-cart"></span></p>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"><span className="text-light fs-5 bi bi-person"></span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
               
            </div>
            {/* <div className="fs-1 position-absolute">
            <h1 className="text-light">Please Login to Countine</h1>
            </div> */}


        </div>
    )
}