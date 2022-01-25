import Footer from '../Footer/Footer';
import Head from '../Head/Head';
import Style from './Cart.module.css'


function Cart(){
   
    return(
        <>
            <Head />
            <div className={Style.container} >
                
                <h3>Carrito de Compras</h3>
                <h4> Productos</h4>
                <article>
                    {/* {products.map((el)=> )} */}
                </article>
                <h4>Carrito</h4>
                <article>  </article>
               {/* <ul>
                <li> <h4>Titulo</h4>Como usuario  quiero poder ver junto al título del carrito de compras, la cantidad de productos que voy agregando al mismo.</li>
                <li> <h4>Card</h4>Como usuario quiero ver cada card de cada producto que agregue al carrito. En el mismo me interesa ver su foto, nombre de producto, un botón para eliminarlo del carrito, quiero poder aumentar o disminuir las cantidades del mismo (visualizando la cantidad de unidades disponibles en stock) y en el extremo derecho visualizar su precio unitario y total (en caso de ser varias unidades).</li>
                <li> <h4>Precio total</h4>Es de utilidad ver el precio total de la compra a realizar, teniendo en cuenta todos los productos agregados al carrito.</li>
                <li> <h4>Botón de seguir comprando</h4>Como usuario necesito un botón que me permita ir hacia atrás para seguir comprando y poder agregar más productos a la wishlist.</li>
                <li> <h4>Botón de comprar</h4>Es necesario un botón que confirme la compra</li>
               </ul> */}
            </div>
            <Footer />
        </>
    )
};

export default Cart;