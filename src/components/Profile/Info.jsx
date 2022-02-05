import { Popover , Button , Typography} from "@material-ui/core";
import { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {detalleUsers} from '../../redux/actions';
import Style from "./Info.css";

function Info(){
    const [anchor, setAnchor] = useState(null)
    const openPopover = (e) =>{
        setAnchor(e.currentTarget);
    }
    const closePopover = (e) =>{
        setAnchor(!e.currentTarget)
    }

    const dispatch = useDispatch();
    let userDetail = useSelector(state => state.userDetail);
    const idUsers = useSelector(state => state.idUser)
   

   
        useEffect(() => {
            dispatch(detalleUsers(idUsers));
        }, [dispatch, idUsers]);

    return(
        <div className = {Style.box}>
            <div className={Style.conten}>
            <Button
            style={{margin: 5 , marginleft: 2, }}
            variant="contained"
            color= "primary"

            onClick={openPopover} 
            className= "button"          
            >
                Ver tus datos
            </Button>
           <Popover
            open={Boolean(anchor)}
            anchorEl= {anchor}
            anchorOrigin ={{
                vertical: "top",
                horizontal:"right",
            }}
            transformOrigin ={{
                vertical: "botton",
                horizontal:"top",
            }}
            >
                <Typography className="coso"> 
                <div>
                
                <div><div>Nombre: <b>{userDetail.name}</b></div><br />
                <div>Apellido: <b>{userDetail.surname}</b></div><br />
                <div>Correo: <b>{userDetail.email}</b></div></div>
                    {
                        userDetail.clientAddresses ? userDetail.clientAddresses.map((e) =>(
                            <div key={e.id}>
                                <div>Dirección: <b>{e.address}</b></div><br />
                                <div>Código Postal: <b>{e.postalCode}</b></div><br />
                                <div>Ciudad: <b>{e.city}</b></div><br />
                                <div>Provincia: <b>{e.province}</b></div><br />
                                <div>Piso: <b>{e.floor}</b></div>
                            </div>

                        )): 
                            <div>
                                <div>Dirección: <b>{userDetail.address}</b></div><br />
                                <div>Código Postal: <b>{userDetail.postalCode}</b></div><br />
                                <div>Ciudad: <b>{userDetail.city}</b></div><br />
                                <div>Provincia: <b>{userDetail.province}</b></div><br />
                                <div>Piso: <b>{userDetail.floor}</b></div>
                                <div><p>___________________</p> </div>                            
                            </div>
                    
                    }
            </div>
            
                      <Button
            style={{margin: 5 , marginLeft: 5}}
            className = "button"
            variant="contained"
            color= "secondary"
            onClick={closePopover}            
            > cerrar
            </Button>
                </Typography>

            </Popover>
          </div>
        </div>

    )
}
export default Info;