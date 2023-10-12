import "./ItemListContainer.css"
import CardProduct from "../CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json.products))
    }, []);

    const greeting = props.greeting;
    return (
        <div className="item-list-container">
            {products.map((producto) => {
                return (
                    <div key={producto.id}>
                        <Link to={`/detail/${producto.id}`}>
                            <CardProduct producto={producto} />
                        </Link>
                    </div>
                );
            })}
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;