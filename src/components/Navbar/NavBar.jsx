import Style from './NavBar.module.css'

function NavBar(){
    return(
        <>
            <div className={Style.container} >
            <div>
                <input type='text' placeholder='Search...' />
            </div>
            </div>
        </>
    )
};

export default NavBar;