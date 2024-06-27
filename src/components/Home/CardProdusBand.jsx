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
} from "./Home.style";
import { CartIcon } from "../Produse/Produse.styled";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import { addToCart, removeFromFav, addToFav } from "../../store/actions";

const CardProdusBand = ({ name, img, price, titlu, id, brand }) => {
  const { state, dispatchCart } = useContext(CartContext);

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  return (
    <Card>
      <Image src={img} alt={name} />
    </Card>
  );
};

export default CardProdusBand;
