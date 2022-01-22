import Cards from '../Cards/Cards';
import Menu from '../menuCat/menu';
import Style from './HomeOrganization.module.css'
import SaleBanner from '../SaleBanner/SaleBanner'
import Brand from '../menuCat/brand';

function HomeOrganization(){
    return(
        <>
        <div className={Style.thebar}>
            <div className={Style.lateral}> <Menu /> <Brand /> </div>
            <div className={Style.central}> <SaleBanner /><Cards />  </div>

        </div>
            
        </>
    )
};

export default HomeOrganization;