import React from "react";
import CartItem from "../CartItem";
import { useSelector } from "react-redux";
export default function CartList() {
  const { items } = useSelector((state) => state.cart);
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </ul>
  );
}
