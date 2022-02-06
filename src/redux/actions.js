import axios from "axios";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORY = "GET_CATEGORY";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const GET_PRODUCT_NAME = "GET_PRODUCT_NAME";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const CREAR_USERS = "CREAR_USERS";
export const ADD_INICIO_USER = "ADD_INICIO_USER";
export const ADD_PRODUCT_SHOPPING_CART = "ADD_PRODUCT_SHOPPING_CART";
export const SHOW_SHOPPING_CART = "SHOW_SHOPPING_CART";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_PRODUCT_WISHLIST = "ADD_PRODUCT_WISHLIST";
export const DELETE_PRODUCT_WISHLIST = "DELETE_PRODUCT_WISHLIST";
export const SHOW_WISHLIST = "SHOW_WISHLIST";
export const CREATE_REVIEWS = "CREATE_REVIEWS";
export const GET_REVIEWS = "GET_REVIEWS";
export const GET_SALEBANNER = "GET_SALEBANNER";
export const DETALLE_USERS = "DETALLE_USERS";
export const EDIT_SHOPPING_CART = "EDIT_SHOPPING_CART";
export const CREATE_ORDER = "CREATE_ORDER";
export const GET_ORDER = "GET_ORDER";
export const DELETE_ITEM_SHOPPINGCART = "DELETE_ITEM_SHOPPINGCART";
export const RESET_CART = "RESET_CART";
export const GET_ORDER_HISTORY = "GET_ORDER_HISTORY";
export const UPDATE_USER = "UPDATE_USER"
export const EDIT_USER = "EDIT_USER";

export const EDIT_CART= "EDIT_CART";
export const LOG_OUT = "LOG_OUT";
export const ADD_PRODUCT_BANNER_A_CART= "ADD_PRODUCT_BANNER_A_CART"; 
export const ADD_ACTUAL_ORDER_DETAIL = "ADD_ACTUAL_ORDER_DETAIL";


export function productDetail(id) {
	return async function (dispatch) {
		try {
			let json = await axios.get(`http://proyecto-personal.online/products/${id}`);
			return dispatch({
				type: PRODUCT_DETAIL,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getProducts() {
	return async function (dispatch) {
		const products = await axios("http://proyecto-personal.online/products");
		return dispatch({ type: GET_PRODUCTS, payload: products.data });
	};
}

export function getProductName(name) {
	return async function (dispatch) {
		try {
			let json = await axios.get("http://proyecto-personal.online/products?name=" + name);
			dispatch({
				type: GET_PRODUCT_NAME,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getCategory() {
	return async function (dispatch) {
		const category = await axios("http://proyecto-personal.online/category");
		return dispatch({ type: "GET_CATEGORY", payload: category.data });
	};
}

export function filterProductsByCategory(payload) {
	return function (dispatch) {
		return dispatch({
			type: FILTER_BY_CATEGORY,
			payload,
		});
	};
}

export function filterProductsByBrand(payload) {
	return function (dispatch) {
		return dispatch({
			type: FILTER_BY_BRAND,
			payload,
		});
	};
}

export function orderByName(payload) {
	return function (dispatch) {
		return dispatch({
			type: ORDER_BY_NAME,
			payload,
		});
	};
}

export function orderByPrice(payload) {
	return function (dispatch) {
		return dispatch({
			type: ORDER_BY_PRICE,
			payload,
		});
	};
}

export const addUsers = (payload) => {
	return async (dispatch) => {
		let response = await axios.post(
			`http://proyecto-personal.online/auth/signup`,
			payload
		);
		return response;
	};
};
//Responder
export const addInicioUser = ({ email, pwd }) => {
	return (dispatch) => {
		axios
			.post(
				`http://proyecto-personal.online/auth/signIn`,
				{ email, pwd },
				{ withCredentials: true }
			)
			.then((res) => {
				console.log(res);
				res.data.user
					? dispatch({ type: ADD_INICIO_USER, payload: res.data.user })
					: dispatch({ type: ADD_INICIO_USER, payload: false });
			});
	};
};
//Acciones carrito

export function addProductShoppingCart(body) {
	return async function (dispatch) {
		await axios.post(`http://proyecto-personal.online/cart`, body);
		dispatch({
			type: ADD_PRODUCT_SHOPPING_CART,
		});
	};
}
export function addProductBanneraCart(body) {
	console.log(body);
	return async function (dispatch) {
		await axios.post(`http://proyecto-personal.online/cart`, body);
		dispatch({
			type: ADD_PRODUCT_BANNER_A_CART,
		});
	};
}

export function removeCart({ productId, userId }) {
	return async function (dispatch) {
		await axios.delete(`http://proyecto-personal.online/cart`, {
			data: { productId, userId },
		});
		dispatch({
			type: REMOVE_CART,
			action: productId,
			userId,
		});
	};
}

export function addProductWishlist(body) {
	return async function (dispatch) {
		await axios.post(`http://proyecto-personal.online/wishlist`, body);
		dispatch({
			type: ADD_PRODUCT_WISHLIST,
		});
	};
}
export function editCart({ productId, userId, quantity }) {
	return async function (dispatch) {
		await axios.put(`http://proyecto-personal.online/cart`, {
			data: { productId, userId, quantity },
		});
		dispatch({
			type: EDIT_CART,
		});
	};
}

export function deleteProductWishlist({ productId, userId }) {
	console.log({ productId, userId });
	return async function (dispatch) {
		await axios.delete(`http://proyecto-personal.online/wishlist`, {
			data: { productId, userId },
		});
		dispatch({
			type: DELETE_PRODUCT_WISHLIST,
		});
	};
}
//CreateReview crea una puntuacion y comentario
export function createReview(id, review) {
	return (dispatch) => {
		axios
			.post(`http://proyecto-personal.online/productReview/${id}/review`, review)
			.then((result) => {
				return dispatch({
					type: CREATE_REVIEWS,
					payload: result.data,
				});
			})
			.catch((err) => {
				console.log("err :>> ", err);
			});
	};
}

//obtengo todos mis comentarios por ID de producto
export function getReview(id) {
	return (dispatch) => {
		axios
			.get(`http://proyecto-personal.online/productReview/${id}/review`)
			.then((result) => {
				return dispatch({
					type: GET_REVIEWS,
					payload: result.data,
				});
			})
			.catch((err) => {
				console.log("err :>> ", err);
			});
	};
}

//obtengo mi salebanner
export function getSaleBanner() {
	return (dispatch) => {
		axios
			.get("http://proyecto-personal.online/saleBanner")
			.then((result) => {
				return dispatch({
					type: GET_SALEBANNER,
					payload: result.data,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	};
}

export function getShoppingCart(userId) {
	return async function (dispatch) {
		let prod = await axios(`http://proyecto-personal.online/cart/${userId}`);
		dispatch({
			type: SHOW_SHOPPING_CART,
			payload: prod.data,
		});
	};
}

export function getWishlist(userId) {
	return async function (dispatch) {
		let prod = await axios(`http://proyecto-personal.online/wishlist/${userId}`);
		dispatch({
			type: SHOW_WISHLIST,
			payload: prod.data,
		});
	};
}

export function editShoppingCart(body) {
	return async function (dispatch) {
		console.log(body);
		await axios.put(`http://proyecto-personal.online/cart/`, body);
		dispatch({
			type: EDIT_SHOPPING_CART,
		});
	};
}

export function createOrder(userId, body) {
	return async function (dispatch) {
		const response = await axios.post(
			`http://proyecto-personal.online/orders/${userId}`,
			body
		);
		dispatch({
			type: CREATE_ORDER,
			payload: response.data,
		});
	};
}

export function getUserOrder(id) {
	return async function (dispatch) {
		let orden = await axios(`http://proyecto-personal.online/orders/${id}`);
		dispatch({
			type: GET_ORDER,
			payload: orden.data,
		});
	};
}

export function deleteCartItem({ productId, userId }) {
	return async function (dispatch) {
		await axios.delete(`http://proyecto-personal.online/cart/`, {
			data: { productId, userId },
		});
		dispatch({
			type: DELETE_ITEM_SHOPPINGCART,
		});
	};
}

export function resetShoppingCart() {
	return async function (dispatch) {
		dispatch({
			type: RESET_CART,
		});
	};
}

export function getOrderHistory(userId) {
	return async function (dispatch) {
		let historial = await axios(`http://proyecto-personal.online/orders/${userId}`);
		console.log(historial.data);
		dispatch({
			type: GET_ORDER_HISTORY,
			payload: historial.data,
		});
	};
}

export function editUser(userToEdit) {
	console.log(userToEdit);
	return async function (dispatch) {
		const edited = (
			await axios.put(
				`http://proyecto-personal.online/users/${userToEdit.id}`,
				userToEdit
			)
		).data;
		return dispatch({ type: EDIT_USER, payload: userToEdit });
	};
}



export function detalleUsers (id) {
    return async (dispatch) => {
        let response = await axios.get(`http://proyecto-personal.online/users/${id}`);
        dispatch({
            type: DETALLE_USERS,
            payload: response.data
        });
    }
}



export function logout() {
	return async function (dispatch) {
		dispatch({
			type: LOG_OUT,
		});
	};


}


