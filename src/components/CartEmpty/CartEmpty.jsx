import React from "react";
import { Link } from "react-router-dom";
import imgPerson from "../../assets/img/person-cart.jpg";
const CartEmpty = () => {
  return (
    <>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src={imgPerson} alt="person-cart" />

      <Link to="/">Вернуться на главную</Link>
    </>
  );
};

export default CartEmpty;
