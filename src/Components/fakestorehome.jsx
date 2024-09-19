


import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export default function FakestoreHome() {

    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                setCategory(response.data)
            })
    }, [])


    return (
        <div>
            <nav className="navbar ">
                <a className="navbar-brand" href="/"> Shopper</a>
                <button className="navbar-toggle" data-bs-target="#list" data-bs-toggle="collapse">
                    <span className="bi bi-list"></span> </button>
                <div className="navbar-collapse collapse" id="list">
                    <ol className="navbar-nav">
                        {
                            category.map((cat, index) =>
                                <li className="nav-item" index={index}>
                                    <Link to="/">{cat}</Link>
                                </li>
                            )
                        }
                    </ol>

                </div>
            </nav>
        </div>
    )
}