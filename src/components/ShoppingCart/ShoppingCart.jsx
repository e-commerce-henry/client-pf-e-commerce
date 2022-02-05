import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import {
  getShoppingCart,
  createOrder,
  deleteCartItem,
  resetShoppingCart,
} from "../../redux/actions";
import Style from "./ShoppingCart.module.css";
import axios from "axios";
import Vacío from "../Vacío/Vacío";


const FORM_ID = 'payment-form';




export default function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.cart);
  let userId = useSelector((state) => state.idUser);
  const productos = useSelector((state) => state.products);
  const userInfo = useSelector((state) => state.userDetail);
  const ofertas = useSelector((state) => state.saleBanner);
  const dispatch = useDispatch();
  const orderId = useSelector((state)=> state.orderCreated)
  const [ordenCreada, setOrdenCreada] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  
  

  useEffect(() => {
    dispatch(getShoppingCart(userId));
  }, [dispatch]);


  useEffect(async ()=>{
    if(orderId){
      const response = (await axios.post(`http://localhost:3001/mercadoPago/${orderId}`)).data
      console.log(response)
      setPreferenceId(response)
      setOrdenCreada(false)
    }
  },[orderId])

  //sdk v2

  // useEffect(() => {
  //   if (preferenceId) {
  //     const redirectToMercadoPago = (preferenceId) => {
  //       const loadScript = (url, callback) => {
  //         let script = document.createElement('script');
  //         script.type = 'text/javascript';
      
  //         if (script.readyState) {
  //           script.onreadystatechange = () => {
  //             if (
  //               script.readyState === 'loaded' ||
  //               script.readyState === 'complete'
  //             ) {
  //               script.onreadystatechange = null;
  //               callback();
  //             }
  //           };
  //         } else {
  //           script.onload = () => callback();
  //         }
  //         script.src = url;
  //         document.getElementsByTagName('head')[0].appendChild(script);
  
  //       };
        
      
  //       const handleScriptLoad = () => {
  //         const mp = new window.MercadoPago('APP_USR-e5bd5ecb-eb29-4f00-930b-3981e0b77b5c', {
  //           locale: 'es-AR'
  //         });
  //         mp.checkout({
  //           preference: {
  //             id: preferenceId
  //           },
  //           autoOpen: true
  //         });
  //       };
      
  //       loadScript('https://sdk.mercadopago.com/js/v2', handleScriptLoad);
  //     };
  //     redirectToMercadoPago(preferenceId);
  //   }
  // }, [preferenceId]);





  //sdk v1

  useEffect(()=>{
    if(preferenceId){
      const script = document.createElement('script');
      const attr_data_preference = document.createAttribute('data-preference-id')
      attr_data_preference.value = preferenceId
      script.type = 'text/javascript';
      script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttributeNode(attr_data_preference)

     
      document.getElementById(FORM_ID).appendChild(script)
      
      return ()=>{
        document.getElementById(FORM_ID).removeChild(script)
      }
    }
  }, [preferenceId])


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

  //{ productId, userId } deleteCartItem
  async function resetCartShopping() {
    shoppingCart[0].cartItems.map((e) => {
      let productId = e.productId;

      dispatch(deleteCartItem({ userId, productId }));
    });
    await dispatch(getShoppingCart(userId))
    await dispatch(resetShoppingCart())
  }

  function creOrder() {
    let products = shoppingCart[0].cartItems;
    console.log(products)
    let addressId = userInfo.clientAddresses[0].id;
    let total = calculateTotal();
    dispatch(createOrder(userId, { products, addressId, total }));
    setOrdenCreada(true);
    alert(`Gracias por tu compra ${userInfo.name}, tu total es de ${total}`);
    resetCartShopping();
  }

  

  return (
    <>
      <div className={Style.cont}>
      {shoppingCart[0]
            ? shoppingCart[0].cartItems.length === 0 ? null :
        <div>
          <div className={Style.casi}>{`Ya casi lo tienes ${userInfo.name}!`}</div>
          <div className={Style.headcart}>
            <div className={Style.div7}>Producto</div>
            <div className={Style.div8}>Precio</div>
            <div className={Style.div9}>Cantidad</div>
            <div className={Style.div10}>Subtotales</div>
          </div>
        </div> : null
        }
        <div>
          {shoppingCart[0]
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
            : null}
        </div>
      </div>
  


      {shoppingCart[0]
            ? shoppingCart[0].cartItems.length === 0 ? null :
            <div className={Style.box}>
              <div className={Style.parrafo}>Estas por realizar la compra de estos {totalCant} productos por un total de:</div>
              <div className={Style.parrafo1}>
                $ {Number(Math.ceil(total)).toLocaleString()} <br />
                <button className={Style.boo} onClick={(e) => creOrder()}>
                  Comprar ahora
                </button>
              </div>
            </div> : null }
             {/* testing MP */}
          <form id={FORM_ID} ></form>
          {/* <div>
              <div id='mp' className="cho-container"></div>
          </div> */}

    </>
  );
}
