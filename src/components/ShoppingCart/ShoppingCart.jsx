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

export default function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.cart);
  let userId = useSelector((state) => state.idUser);
  const productos = useSelector((state) => state.products);
  const userInfo = useSelector((state) => state.userDetail);
  const ofertas = useSelector((state) => state.saleBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCart(userId));
  }, [dispatch]);


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
    let addressId = userInfo.clientAddresses[0].id;
    let total = calculateTotal();
    dispatch(createOrder(userId, { products, addressId, total }));
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
      </div>
      </div>
    </>
  );
}
