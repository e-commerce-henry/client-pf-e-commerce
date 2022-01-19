import Cards from '../Cards/Cards';
import Menu from '../menuCat/menu';
import Style from './HomeOrganization.module.css'
import SaleBanner from '../SaleBanner/SaleBanner'
import Filters from '../Filters/Filters';

function HomeOrganization(){
    return(
        <>
        <div className={Style.thebar}>
            <div className={Style.lateral}><Menu /> <Filters /> </div>
            <div className={Style.central}><SaleBanner /><Cards />  </div>

        </div>
            
        </>
    )
};

export default HomeOrganization;