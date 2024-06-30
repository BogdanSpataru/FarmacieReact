import React from "react";
import {
  CardContainer,
  Image,
  Description,
  Producer,
  Price,
  AddToCartButton,
  CartIcon,
  LinkContainer,
} from "./Produse.styled";
import FavoriteButtonComponent from "./FavoriteButton";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import { addToCart } from "../../store/actions";

function CardProdus({ img, titlu, brand, price, name, id }) {
  const { dispatchCart } = useContext(CartContext);

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  return (
    <CardContainer>
      <FavoriteButtonComponent id={id} name={name} img={img} price={price} />
      <LinkContainer to={`/produs/${id}`}>
        <Image src={img} alt="Product" />
        <Description>{titlu}</Description>
      </LinkContainer>
      <Producer href="#">{brand}</Producer>
      <Price>{price}</Price>
      <AddToCartButton onClick={() => handleAddCart(id, name, img, price)}>
        <CartIcon>&#128722;</CartIcon>
      </AddToCartButton>
    </CardContainer>
  );
}

export default CardProdus;
