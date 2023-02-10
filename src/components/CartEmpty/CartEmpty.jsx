import React from "react";
import { Link } from "react-router-dom";
import imgPerson from "../../assets/img/person-cart.jpg";
import styles from "./CartEmpty.module.scss";
const CartEmpty = () => {
  return (
    <>
      <div className="container">
        <div className={styles.box}>
          <h2 className={styles.title}>Корзина пустая 😕</h2>
          <p className={styles.text}>
            Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
          <img className={styles.img} src={imgPerson} alt="person-cart" />

          <Link className={styles.btn} to="/">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
