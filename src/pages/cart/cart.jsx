import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import styles from './cart.module.css';

export default function Cart() {
    const { cartItems } = useContext(CartContext);

    
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleCheckOut = () => {
        const confirm = window.prompt("Do you want to continue this payment, yes or no?")
        if(confirm == "yes") {
            alert("Your order has been successfully processed!")
        } else{
            alert("Payment stoped!")
        }
        
    }
    return (
        <div className={styles.cart}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <img src={item.productImage} alt={item.productName} className={styles.productImage} />
                            <div>
                                <h3>{item.productName}</h3>
                                <p className={styles.price}>Price: ${item.price}</p>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className={styles.total}>
                        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                    </div>
                    <button className={styles.alert} onClick={handleCheckOut}>CheckOut</button>
                </>
            )}
        </div>
    );
}
