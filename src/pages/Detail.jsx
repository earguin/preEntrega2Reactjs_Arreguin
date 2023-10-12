import CardProduct from "../components/CardProduct/CardProduct";
import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";

const Detail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((json) => setProduct(json));
    }, [id]);

    return (
        <div style={{ display:"flex", justifyContent:"center", margin:20 }}>
            {product.id? <CardProduct producto={product} />: null}
        </div>
    );
};

export default Detail;
