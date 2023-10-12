//carrito de compras
import "./styles.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
        <div className="cart">
            <ShoppingCartIcon/>            
            <span>8</span>
        </div>
    );
}

export default CartWidget;