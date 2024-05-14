import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Header.module.css";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li className={styles.dropdownOne}>
              <a href="">Latest</a>
              <ul className={styles.dropdownMenu}>
                <li>Product List</li>
                <li>Product Details</li>
              </ul>
            </li>
            <li className={styles.dropdownTwo}>
              <a href="">Blog</a>
              <ul className={styles.dropdownMenuTwo}>
                <li>Blog</li>
                <li>Blog details</li>
              </ul>
            </li>
            <li className={styles.dropdownThree}>
              <a href="">Pages</a>
              <ul className={styles.dropdownMenuThree}>
                <li>Login</li>
                <li>Cart</li>
                <li>Element</li>
                <li>Confirmation</li>
                <li>Product Checkot</li>
              </ul>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <FaSearch />
          <FaRegUser />
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
