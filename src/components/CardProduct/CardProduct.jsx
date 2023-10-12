import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./CardProduct.css"

const CardProduct = ({producto}) => {
    return (
        <Card className='cardProduct' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={producto.images[0]}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${producto.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardProduct