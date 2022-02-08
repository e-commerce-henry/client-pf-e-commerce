import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {editUser, detalleUsers} from "../../redux/actions";

import { Modal, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react";
import Style from'../Profile/PersonalInfo.module.css';


//Material-ui styles
const useStyles = makeStyles((theme)=>({
    modal:{
        position:'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width:'70%',
        height:'90%',
        backgroundColor:'white',
        border:'none',
        boxShadow: '0px 0px 5px 1px #00adb5',
        padding: theme.spacing(0,4,0),
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        borderRadius: '20px',
        color:'#00adb5',
        fontSize:'18px',
        fontFamily:'Lexend Deca'
    },
    textfield:{
        width:'90%',
    },
    floatingLabelFocusStyle: {
        color: "#00adb5",
        fontFamily:'Lexend Deca',
        fontSize:'17px',
    },
    floatingValueFocusStyle: {
        color: "#303841",
        fontFamily:'Lexend Deca',
        fontSize:'17px',
        border:'red'
    }

}))




const EditUser = () =>{
    const dispatch = useDispatch();

    const styles = useStyles();

    const user = useSelector(state => state.userDetail);


    const idUsers =useSelector(state => state.idUser)

    const [showModal, setShowModal]= useState(false)
    
    const [userToEdit, setUserToEdit] = useState({})

    useEffect(()=>{
        dispatch(detalleUsers(idUsers))
    }, [dispatch, idUsers])

    // let foundById = null
    const onClick = (e)=>{
        setShowModal(!showModal)
        // foundById = user.filter(elem=>{return elem.id == e.target.value})
        console.log('user', user);

        const { id, name, surname, email } = user;
        
        const { address, postalCode, city, province, floor} = user.clientAddresses[0];
        setUserToEdit({
            id,
            name,
            surname,
            email,
            address,
            postalCode,
            city,
            province,
            addressId : user.clientAddresses[0].id,
            floor: floor || ''
        })
    }

    const onChangeHandler = (e) =>{
        setUserToEdit({
            ...userToEdit,
            [e.target.name]: e.target.value
        })
    }

    const editUserHandler = (e)=>{
        e.preventDefault();
        dispatch(editUser(userToEdit))
        setShowModal(!showModal)
    }

   
    return(
        <>
        <button className="bu" value={user.id} onClick={onClick}>Editar Usuario</button>
        {
            userToEdit 
                ? <Modal
                open={showModal}
                onClose={()=>{setShowModal(!showModal)}}
                >
                    <form className={styles.modal} onSubmit={editUserHandler} >
                        <div align='center' >
                            <h3>Editar Usuario</h3>
                        </div>
                        {/* <TextField
                            label='N° Id:'
                            name='id'
                            className={styles.textfield}
                            value={userToEdit.id}
                            // onChange={handleOnChange}
                            disabled
                        /> */}
                        {/* <br/> */}
                        <TextField
                            label='Nombre: '
                            name='name'
                            className={styles.textfield}
                            value={userToEdit.name}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Apellido:'
                            name='surname'
                            className={styles.textfield}
                            value={userToEdit.surname}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Correo electrónico:'
                            name='email'
                            className={styles.textfield}
                            value={userToEdit.email}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        {/* <br/>
                        <TextField
                            label='Dirección:'
                            name='address'
                            className={styles.textfield}
                            value={userToEdit.address}
                            onChange={onChangeHandler}
                        /> */}
                        <br/>
                        <TextField
                            label='Dirección:'
                            name='address'
                            className={styles.textfield}
                            value={userToEdit.floor}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Ciudad:'
                            name='city'
                            className={styles.textfield}
                            value={userToEdit.city}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Provincia/Estado:'
                            name='province'
                            className={styles.textfield}
                            value={userToEdit.province}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Código postal:'
                            name='cp'
                            className={styles.textfield}
                            value={userToEdit.postalCode}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        <br/>
                        <TextField
                            label='Piso: (opcional)'
                            name='floor'
                            className={styles.textfield}
                            value={userToEdit.floor}
                            onChange={onChangeHandler}
                            InputLabelProps={{
                                className: styles.floatingLabelFocusStyle,
                            }}
                            InputProps={{
                                className: styles.floatingValueFocusStyle,
                            }}
                        />
                        
                        <div className={Style.crear}>
                            <button type="submit" className={Style.btnedit} >Aceptar</button>
                            <button onClick={()=>setShowModal(!showModal)}className={Style.btnedit}  >Cancelar</button>
                        </div>
                    </form>
                </Modal>
                :null
        }    
        
        </>
        
    )
};

export default EditUser;