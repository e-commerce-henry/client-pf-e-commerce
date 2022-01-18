import Style from './NavBar.module.css'

function NavBar(){
    return(
        <>
            <div className={Style.container} >navbar</div>
            <div>
                <input type='text' placeholder='Search...' />
            </div>
        </>
    )
};

export default NavBar;