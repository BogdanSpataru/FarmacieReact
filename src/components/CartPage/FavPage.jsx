import React, { useContext, useState } from "react";
import { CartContext } from "../../store/context";
import { addToCart, removeFromCart, removeFromFav } from "../../store/actions";
import {
  CartContainer,
  CartItemsContainer,
  CartItem,
  ItemDetails,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  Title,
  AddToCartButton,
  CartIcon,
} from "./CartPage.styled";

const CartPage = () => {
  const { stateGlobalCart, dispatchCart } = useContext(CartContext);
  const favValue = stateGlobalCart?.favValue || [];

  const groupedFavValue = favValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleRemoveFromFav = (id) => {
    dispatchCart(removeFromFav(id));
  };

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  return (
    <CartContainer>
      <CartItemsContainer>
        <Title>FAVORITE:</Title>
        {groupedFavValue.map((item, index) => (
          <CartItem key={index}>
            <ItemDetails to={`/produs/${item.id}`}>
              <ItemImage src={item.img} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>Pret: {item.price}</ItemPrice>
              </ItemInfo>
            </ItemDetails>
            <AddToCartButton
              onClick={() =>
                handleAddCart(item.id, item.name, item.img, item.price)
              }
            >
              <CartIcon>🛒</CartIcon> ADAUGĂ ÎN COȘ
            </AddToCartButton>
            <ItemQuantity>
              <QuantityButton
                onClick={() =>
                  handleRemoveFromFav(item.id, item.name, item.img)
                }
              >
                X
              </QuantityButton>
            </ItemQuantity>
          </CartItem>
        ))}
      </CartItemsContainer>
    </CartContainer>
  );
};
export default CartPage;
