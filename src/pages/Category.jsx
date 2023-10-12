import CardProduct from "../components/CardProduct/CardProduct";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {    
    const [products, setProducts] = useState([]);
    let { categoryId } = useParams();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProducts(json.products))
    }, []);


    let filteredCategories = products.filter( (product) => {
        return product.category === categoryId
    });

    return (
        <div className="item-list-container">
            {
                filteredCategories.map( (producto) => {
                    
                    return (
                        
                        <div style={{ margin: 10 }} key={producto.id}>
                            <CardProduct producto={producto} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Category;

