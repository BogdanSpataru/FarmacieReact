import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  position: relative;
  background-color: whitesmoke;
  max-height: 500px;
`;

export const LinkContainer = styled(Link)`
  width: 280px;
  position: relative;
  background-color: whitesmoke;
  max-height: 400px;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  background-color: transparent;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  z-index: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoriteIcon = styled.span`
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: black;
`;

export const Producer = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: darkblue;
  text-decoration: none;
  margin-top: 5px;

  &:hover {
    color: #333;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: red;
  margin-top: 5px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: calc(80% + 4px);
  right: 20px;

  &:hover {
    background-color: darkgreen;
  }
`;

export const CartIcon = styled.span`
  font-size: 20px;
`;

export const ProduseContainer = styled.div`
  display: flex;
  padding: 50px 100px 0px;
  flex-wrap: wrap;
  justify-content: center;
`;
