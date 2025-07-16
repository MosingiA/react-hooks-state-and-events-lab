import React,{useState}from "react";
import itemData from "../data/items";
import ShoppingList from "./ShoppingList";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart(){
    setIsInCart((inCart) => !inCart);
  }
  return (
    <li className={isInCart ?"in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
