import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../context/cartContext"; 
import styles from './Navbar.module.css';

const Navbar = () => {
    const { itemCount } = useContext(CartContext); // Koristimo useContext za pristup broju stavki u korpi

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Link to={"/"}>Shop</Link>
                <Link to={"/cart"} className={styles.cartLink}>
                    <div className={styles.cartIconWrapper}>
                        <ShoppingCartIcon fontSize="32" />
                        {itemCount > 0 && (
                            <span className={styles.cartBadge}>{itemCount}</span>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
