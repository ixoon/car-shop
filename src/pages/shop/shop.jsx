import React, { useContext } from "react";
import styles from './shop.module.css';
import { PRODUCTS } from "../../products";
import Product from './product'
import { CartContext } from "../../context/cartContext";

export default function Shop() {

    const {addToCart} = useContext(CartContext);

    return(
        <div className={styles.shop}>
            <div className={styles.shopTitle}>
                <h1>Online car shop</h1>
            </div>
            <div className={styles.products}>
                {PRODUCTS.map((product) => <Product data={product} key={product.id} addToCart={() => addToCart(product)}/>)}
            </div>
        </div>
    )
}