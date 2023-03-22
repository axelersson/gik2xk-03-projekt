import { Rating } from "@mui/material";
import { create } from "../models/RatingsModel"
/* async function onRate(e){
     await create(product.id).then(() => console.log('borttaget')); 
    console.log(e)
} */

function AddRating({ id }) {
    return ( <><Rating precision={0.5} max={10} onClick={(e) =>{
                console.log(e.target.value, id) 
         create(id, e.target.value).then(() =>{ 
            console.log('Lagt till omdöme')
        })  

    }}/></> );
}

export default AddRating;