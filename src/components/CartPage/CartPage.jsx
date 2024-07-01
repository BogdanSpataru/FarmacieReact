import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../store/context";
import { addToCart, removeFromCart, addToFav } from "../../store/actions";
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
  SummaryContainer,
  SummaryItem,
  SummaryTitle,
  ContinueButton,
  Title,
  FavoriteButtonCos,
  CartIcon,
} from "./CartPage.styled";

function CartPage() {
  const { dispatchCart, stateGlobalCart } = useContext(CartContext);
  const cartValue = stateGlobalCart?.cartValue || [];

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(",", ".").replace(" LEI", ""));
  };
  const total = cartValue
    .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    .toFixed(2);
  const totalItems = cartValue.reduce((acc, item) => acc + item.quantity, 0);

  const groupedCartValue = cartValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleRemoveFromCart = (id) => {
    dispatchCart(removeFromCart(id));
  };

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  const handleAddFav = (id, name, img, price) => {
    dispatchCart(addToFav(id, name, img, price));
  };

  return (
    <CartContainer>
      <CartItemsContainer>
        <Title>COSUL MEU:</Title>
        {groupedCartValue.map((item, index) => (
          <CartItem key={index}>
            <ItemDetails to={`/produs/${item.id}`}>
              <ItemImage src={item.img} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>
                  Cantitate:{item.quantity} x {item.price}
                </ItemPrice>
              </ItemInfo>
            </ItemDetails>
            <FavoriteButtonCos
              onClick={() =>
                handleAddFav(item.id, item.name, item.img, item.price)
              }
            >
              <CartIcon role="img" aria-label="heart">
                🤍
              </CartIcon>
              Adauga in favorite
            </FavoriteButtonCos>
            <ItemQuantity>
              <QuantityButton
                onClick={() =>
                  handleRemoveFromCart(item.id, item.name, item.img)
                }
              >
                -
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton
                onClick={() =>
                  handleAddCart(item.id, item.name, item.img, item.price)
                }
              >
                +
              </QuantityButton>
            </ItemQuantity>
          </CartItem>
        ))}
      </CartItemsContainer>
      <SummaryContainer>
        <SummaryTitle>Sumar comanda</SummaryTitle>
        <SummaryItem>
          <span>Total produse:</span>
          <span>{totalItems} produse </span>
        </SummaryItem>
        <SummaryItem>
          <span>Cost produse:</span>
          <span>{total} LEI</span>
        </SummaryItem>
        <ContinueButton>Continua</ContinueButton>
      </SummaryContainer>
    </CartContainer>
  );
}
export default CartPage;
