import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import CartItem from "./CartItem";
import {
  getShoppingCart,
  createOrder,
  deleteCartItem,
  resetShoppingCart,
  detalleUsers,
  getInviteCart,
  getProducts
} from "../../redux/actions";
import Style from "./ShoppingCart.module.css";
import axios from "axios";
import Vacío from "../Vacío/Vacío";
import CompleteInfoGoogle from "../EditUsers/CompleteInfoGoogle";

const FORM_ID = 'payment-form';




export default function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.cart);
  let userId = useSelector((state) => state.idUser);
  const productos = useSelector((state) => state.products);
  const userInfo = useSelector((state) => state.userDetail);
  const ofertas = useSelector((state) => state.saleBanner);
  const infoCarritoInvitado = useSelector((state) => state.inviteCart);
  const dispatch = useDispatch();
  const orderId = useSelector((state)=> state.orderCreated)
  const [preferenceId, setPreferenceId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getShoppingCart(userId));
    dispatch(detalleUsers(userId))
    dispatch(getInviteCart());
    dispatch(getProducts())
  }, [dispatch]);


  useEffect(async ()=>{
    if(orderId){
      const response = (await axios.post(`http://proyecto-personal.online/mercadoPago/${orderId}`)).data
      console.log(response)
      setPreferenceId(response)
    }
  },[orderId])

  //sdk v2

  useEffect(() => {
    if (preferenceId) {
      const redirectToMercadoPago = (preferenceId) => {
        const loadScript = (url, callback) => {
          let script = document.createElement('script');
          script.type = 'text/javascript';
      
          if (script.readyState) {
            script.onreadystatechange = () => {
              if (
                script.readyState === 'loaded' ||
                script.readyState === 'complete'
              ) {
                script.onreadystatechange = null;
                callback();
              }
            };
          } else {
            script.onload = () => callback();
          }
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
  
        };
        
      
        const handleScriptLoad = () => {
          const mp = new window.MercadoPago('APP_USR-642eafee-0eab-415f-ac25-742c4a58252b', {
            locale: 'es-AR'
          });
          mp.checkout({
            preference: {
              id: preferenceId
            },
            autoOpen: true
          });
        };
      
        loadScript('https://sdk.mercadopago.com/js/v2', handleScriptLoad);
      };
      redirectToMercadoPago(preferenceId);
    }
  }, [preferenceId]);

  function searchAndComplementInfo(id) {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        return {
          name: productos[i].name,
          img: productos[i].img,
          brand: productos[i].brand,
          stock: productos[i].stock,
        };
      }
    }
  }
  

  function calculateTotal() {
    let suma = 0;
    shoppingCart[0].cartItems.map((e) => {
      suma = suma + e.quantity * e.price;
    });
    return suma;
  }
  let total = shoppingCart[0] ? calculateTotal() : null;

  function nCant() {
    let cant = 0;
    shoppingCart[0].cartItems.map((e) => {
      cant = cant + e.quantity;
    });
    return cant;
  }
  let totalCant = shoppingCart[0] ? nCant() : null;

  async function creOrder() {
    await dispatch(detalleUsers(userId))
    let products = shoppingCart[0].cartItems;
    console.log(products)
    let addressId = userInfo.clientAddresses[0].id;
    let total = calculateTotal();
    dispatch(createOrder(userId, { products, addressId, total }));
  }

  function carritoInvitado(){

    if(infoCarritoInvitado){
      console.log(typeof infoCarritoInvitado);
      return (
        infoCarritoInvitado.map((e) => (
          <CartItem
            id={e.id}
            key={e.id}
            price={e.price}
            quantity={e.quantity}
            productId={e.productId}
            addInfo={searchAndComplementInfo(e.productId)}
          />
        )))
    } else {
      return false
      
    }
  }

  

  return (
    <>
      <div className={Style.cont}>
      { shoppingCart.length && shoppingCart[0]
            ? shoppingCart[0].cartItems.length === 0 ? null :
        <div>
          <div className={Style.casi}>{`Ya casi lo tienes ${userInfo.name}!`}</div>
          <div className={Style.headcart}>
            <div className={Style.div7}>Producto</div>
            <div className={Style.div8}>Precio</div>
            <div className={Style.div9}>Cantidad</div>
            <div className={Style.div10}>Subtotales</div>
          </div>
        </div> : carritoInvitado()?
                <div>
          <div className={Style.casi}>{`Ya casi lo tienes!`}</div>
          <div className={Style.headcart}>
            <div className={Style.div7}>Producto</div>
            <div className={Style.div8}>Precio</div>
            <div className={Style.div9}>Cantidad</div>
            <div className={Style.div10}>Subtotales</div>
          </div>
        </div> :null
        }
        <div>
          {shoppingCart.length && shoppingCart[0]
            ? shoppingCart[0].cartItems.length === 0 ? <Vacío /> :
            shoppingCart[0].cartItems.map((e) => (
                <CartItem
                  id={e.id}
                  key={e.id}
                  price={e.price}
                  quantity={e.quantity}
                  productId={e.productId}
                  addInfo={searchAndComplementInfo(e.productId)}
                />
              ))
            : 
              carritoInvitado()
            }
        </div>
      </div>
  


      {shoppingCart.length && shoppingCart[0]
            ? shoppingCart[0].cartItems.length === 0 ? null :
            <div className={Style.box}>
              <div className={Style.parrafo}>Estás por realizar la compra de estos {totalCant} productos por un total de:</div>
              <div className={Style.parrafo1}>
                $ {Number(Math.ceil(total)).toLocaleString()} <br />


                {
                  userInfo.clientAddresses && userInfo.clientAddresses[0].address === null? 
                  <CompleteInfoGoogle/>
                  : <button className={Style.boo} onClick={(e) => creOrder()}>Comprar ahora</button>
                }


              </div>
            </div> : carritoInvitado()?
            <div className={Style.box2}>
              <button className={Style.bo2} onClick={()=> navigate('/inicio-seccion')}>Inicia sesión para comprar</button>
            </div> : <Vacío /> 
      }
          <form id={FORM_ID} ></form>

    </>
  );
}
