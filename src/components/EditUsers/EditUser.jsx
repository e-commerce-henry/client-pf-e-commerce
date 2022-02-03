import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {editUser, detalleUsers} from "../../redux/actions";

import { Modal, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react";

//Material-ui styles
const useStyles = makeStyles((theme)=>({
    modal:{
        position:'absolute',
        display: 'flex',
        flexDirection: 'column',
        width:700,
        height:800,
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
        <button value={user.id} onClick={onClick}>Editar Usuario</button>
        {
            userToEdit 
                ? <Modal
                open={showModal}
                onClose={()=>{setShowModal(!showModal)}}
                >
                    <form className={styles.modal} onSubmit={editUserHandler} >
                        <div align='center' >
                            <h2>Edit User</h2>
                        </div>
                        <TextField
                            label='N° Id:'
                            name='id'
                            className={styles.textfield}
                            value={userToEdit.id}
                            // onChange={handleOnChange}
                            disabled
                        />
                        <br/>
                        <TextField
                            label='Name: '
                            name='name'
                            className={styles.textfield}
                            value={userToEdit.name}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Surname:'
                            name='surname'
                            className={styles.textfield}
                            value={userToEdit.surname}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Email:'
                            name='email'
                            className={styles.textfield}
                            value={userToEdit.email}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Role:'
                            name='role'
                            className={styles.textfield}
                            value={userToEdit.role}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Address:'
                            name='address'
                            className={styles.textfield}
                            value={userToEdit.address}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='City:'
                            name='city'
                            className={styles.textfield}
                            value={userToEdit.city}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Province:'
                            name='province'
                            className={styles.textfield}
                            value={userToEdit.province}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Postal Code:'
                            name='cp'
                            className={styles.textfield}
                            value={userToEdit.postalCode}
                            onChange={onChangeHandler}
                        />
                        <br/>
                        <TextField
                            label='Floor:'
                            name='floor'
                            className={styles.textfield}
                            value={userToEdit.floor}
                            onChange={onChangeHandler}
                        />
                        
                        <div align='rigth' >
                            <button type="submit" >Update</button>
                            <button onClick={()=>setShowModal(!showModal)} >Cancel</button>
                        </div>
                    </form>
                </Modal>
                :null
        }    
        
        </>
        
    )
};

export default EditUser;