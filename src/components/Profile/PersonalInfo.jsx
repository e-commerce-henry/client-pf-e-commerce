import React from "react"
import { useDispatch, useSelector } from "react-redux";

export default function PersonalInfo(){
    const dispatch = useDispatch();
    const userDetail = useSelector(state => state.userDetail);
    return(
        <>
            <p>Bienvenido de nuevo {userDetail.name}</p>
        </>
    )
}