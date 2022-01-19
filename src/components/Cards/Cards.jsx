import Style from './Cards.module.css';
import {Link} from 'react-router-dom'
import Card from './Card';

function Cards(){
    return(
        <>
        {/* {productos?.map(el => { return ( cards, dentro cada card)}) */}
            {/* <Link to={"/product/" + el.id} style={{ textDecoration: 'none' }}> */}
              <Card />
            {/* </Link> */}
        </>
    )
};

export default Cards;