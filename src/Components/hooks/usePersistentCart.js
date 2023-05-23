import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export function usePersistenCart() {
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);
}
