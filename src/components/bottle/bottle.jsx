import React from 'react';
import './bottle.css'
const bottle = ({bottle_single , handleCartBottle}) => {
// console.log(bottle_single)
const cartFunction =()=>{
    handleCartBottle(bottle_single)
}

    return (
        <div  className='bottle-body'>
            <div className='bottle-details'>
            <div>
            <h3>Bottle Name : {bottle_single.name}</h3>
            <p>Capacity : {bottle_single.capacity}</p>
            <p>Material : {bottle_single.material}</p>
            <p>Color : {bottle_single.color}</p>
            <p>Price : <span style={{color:'red'}}>{bottle_single.price} $</span></p>
            <h3>Brand Name : {bottle_single.brand}</h3>
            <p>Rating : <span style={{color:'goldenrod'}}>{bottle_single.rating}⭐</span></p>
            </div>
            <div>
                <img style={{height:'200px', width:'200px'}} src={bottle_single.image}alt='image loading'></img>
            </div>
            </div>
            <button onClick={cartFunction}>Buy Now</button>
        </div>
    );
};

export default bottle;


// {
//     "id": 1,
//     "name": "Water Bottle",
//     "capacity": "500ml",
//     "material": "Plastic",
//     "color": "Blue",
//     "price": 5.99,
//     "isReusable": true,
//     "image": "https://images.pexels.com/photos/346734/pexels-photo-346734.jpeg",
//     "brand": "AquaPure",
//     "rating": 4.5,
//     "description": "A classic and reliable water bottle for everyday hydration."
// }