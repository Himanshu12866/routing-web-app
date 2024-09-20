import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsApp from "./Products";

export default function IndexFake() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) => {
                setList(response.data);
            });
    });

    return (
        <div>
            <nav className="navbar navbar-expand-sm p-3">
                <a className="navbar-brand fs-4" href="products">
                    Shopper.
                </a>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#items"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="items">
                    <ol className="navbar-nav">
                        {list.map((item) => (
                            <li className="nav-item" key={item}>
                                <Link className="nav-link" to={`products/${item}`}>
                                    {item.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
            <ProductsApp />
        </div>
    );
}
