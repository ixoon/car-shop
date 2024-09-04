import React from "react";
import styles from './shop.module.css';

export default function Product({data, addToCart}) {
    const {id, productName, price, productImage, description} = data

    return (
        <div className={styles.product}>
            <img src={productImage} />
            <div className={styles.productname}>
                <h1>{productName}</h1>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles.price}>
                <h2>${price}</h2>
            </div>
            <div>
                <button className={styles.button} onClick={addToCart}>Add to cart</button>
            </div>
        </div>
        
    )
}