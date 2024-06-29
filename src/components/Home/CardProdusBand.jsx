import React from "react";
import styled from "styled-components";
import {
  Card,
  Description,
  Image,
  Title,
  Price,
  AddToCartButtonBand,
  Producer,
  LinkContainerProdus,
} from "./Home.style";
import { CartIcon } from "../Produse/Produse.styled";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import { addToCart, removeFromFav, addToFav } from "../../store/actions";
import FavoriteButtonComponent from "../Produse/FavoriteButton";

const CardProdusBand = ({ name, img, price, titlu, id, brand }) => {
  const { state, dispatchCart } = useContext(CartContext);

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  const isfavorite = state?.favValue?.some((item) => item.id === id);

  return (
    <Card>
      <FavoriteButtonComponent
        id={id}
        name={name}
        img={img}
        price={price}
        isfavorite={isfavorite}
      />
      <LinkContainerProdus to={`/produs/${id}`}>
        <Image src={img} alt={name} />
        <Title>{name}</Title>
        <Description>{titlu}</Description>
      </LinkContainerProdus>
      <Producer href="#">{brand}</Producer>
      <Price>{price} </Price>
      <AddToCartButtonBand onClick={() => handleAddCart(id, name, img, price)}>
        <CartIcon>&#128722;</CartIcon>
      </AddToCartButtonBand>
    </Card>
  );
};

export default CardProdusBand;
