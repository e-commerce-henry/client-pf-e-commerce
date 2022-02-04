import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import {
  getShoppingCart,
  createOrder,
  deleteCartItem,
  resetShoppingCart,
  getSaleBanner
} from "../../redux/actions";
import Style from "./ShoppingCart.module.css";
import axios from "axios";
import { useMercadopago } from 'react-sdk-mercadopago';








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
  
  
  const mercadopago = useMercadopago.v2('TEST-f1c9aa4b-935e-493e-870c-4a26bd4d4490', {
    locale: 'es-AR'
  });
  console.log(mercadopago);
  console.log(preferenceId, typeof(preferenceId))
  useEffect(()=>{
    console.log('entra')
    console.log(preferenceId)
    if(mercadopago){
      mercadopago.checkout({
        preference: {
          id: preferenceId
        },
        render: {
          container: '.cho-container',
          label: "Pagar"
        }
      })
    }
  }, [mercadopago])

  // const checkoutMP = ()=>{
  //   const mp = new window.MercadoPago('TEST-ad741651-25c4-4a96-b06f-9c0a436e0fc4', {
  //     locale: 'es-AR'
  //   });
  
  //   mp.checkout({
  //     preference: {
  //       id: preferenceId,
  //     },
  //     render :{
  //       container: `#payment-form`,
  //       label: 'Pagar'
  //     }
  //   })
  // }




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

  // useEffect(()=>{
  //   if(preferenceId){
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = 'https://sdk.mercadopago.com/js/v2';
  //     script.addEventListener('load', checkoutMP);
  //     document.body.appendChild(script)
  //   }
  // }, [preferenceId])


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
        <div className={Style.casi}>{`Ya casi lo tienes ${userInfo.name}!`}</div>
        <div className={Style.headcart}>
          <div className={Style.div7}>Producto</div>
          <div className={Style.div8}>Precio unitario</div>
          <div className={Style.div9}>Cantidad</div>
          <div className={Style.div10}>Subtotales</div>
        </div>
        <div>
          {shoppingCart[0]
            ? shoppingCart[0].cartItems.map((e) => (
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
  

      <div className={Style.box}>
        {/* <div className={Style.parrafo0}>Estas por realizar la compra</div> */}
        <div className={Style.parrafo}>Estas por realizar la compra de estos {totalCant} productos por un total de:</div>
        <div className={Style.parrafo1}>
          $ {Number(Math.ceil(total)).toLocaleString()} <br />
          <button className={Style.boo} onClick={(e) => creOrder()}>
            Comprar ahora
          </button>
          {/* testing MP */}
          {/* <form id='payment-form' method="GET"></form> */}
          <div>
              <div className="cho-container"></div>
          </div>
      </div>
      </div>
    </>
  );
}
