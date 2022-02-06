import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react";

import { editUser, detalleUsers } from "../../redux/actions";

//Material-ui styles
const useStyles = makeStyles((theme)=>({
    modal:{
        position:'absolute',
        display: 'flex',
        flexDirection: 'column',
        width:500,
        height:700,
        backgroundColor:'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    },
    textfield:{
        width:'80%',
    }
}))

export default function CompleteInfoGoogle(){
    const dispatch = useDispatch();
    const styles = useStyles();
    const user = useSelector(state => state.userDetail);
    const idUsers =useSelector(state => state.idUser);
    const [showModal, setShowModal]= useState(false);
    const [userToEdit, setUserToEdit] = useState({});

    const onClick = (e)=>{
        setShowModal(!showModal)
        const { id, name, surname, email } = user;
        
        setUserToEdit({
            id,
            name,
            surname,
            email,
            addressId : user.clientAddresses[0].id,
        })
    }

    const onChangeHandler = (e) =>{
        setUserToEdit({
            ...userToEdit,
            [e.target.name]: e.target.value
        })
    }

    const editUserHandler = async (e)=>{
        e.preventDefault();
        dispatch(editUser(userToEdit))
        setShowModal(!showModal)
        await dispatch(detalleUsers(idUsers))
    }

    return(
        <>
            <button value={user.id} onClick={onClick}>
                Completar informacion de entrega  
            </button>
            {
                userToEdit ?
                <Modal 
                open={showModal}
                onClose={()=>{setShowModal(!showModal)}}>
                    <form onSubmit={editUserHandler} className={styles.modal}>
                        <TextField
                            label='N° de cliente:'
                            name='id'
                            className={styles.textfield}
                            value={userToEdit.id}
                            // onChange={handleOnChange}
                            disabled
                        />
                        <TextField
                            label='Nombre(s): '
                            name='name'
                            className={styles.textfield}
                            value={userToEdit.name}
                            onChange={onChangeHandler}
                        />
                        <TextField
                            label='Apellido(s):'
                            name='surname'
                            className={styles.textfield}
                            value={userToEdit.surname}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Correo electronico:'
                            name='email'
                            className={styles.textfield}
                            value={userToEdit.email}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Direccion:'
                            name='address'
                            className={styles.textfield}
                            value={userToEdit.address}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Ciudad:'
                            name='city'
                            className={styles.textfield}
                            value={userToEdit.city}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Provincia/estado:'
                            name='province'
                            className={styles.textfield}
                            value={userToEdit.province}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Codigo postal:'
                            name='postalCode'
                            className={styles.textfield}
                            value={userToEdit.postalCode}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Piso:'
                            name='floor'
                            className={styles.textfield}
                            value={userToEdit.floor}
                            onChange={onChangeHandler}
                        />
                        <div align='rigth' >
                            <button type="submit" >Guardar</button>
                            <button onClick={()=>setShowModal(!showModal)} >Cancelar</button>
                        </div>
                    </form>
                </Modal>
                :null
            }
        </>
    )
}