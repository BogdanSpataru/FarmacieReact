import styled from "styled-components";
import {
  DARK_GRAY,
  DARK_GREEN,
  RED_ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/color";
import { Image } from "../Produse/Produse.styled";

export const ProdusContainer = styled.div`
  display: flex;
  padding: 100px 0px 0px 10%;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  background-color: white;
`;

export const ProdusImgSingle = styled(Image)`
  max-height: 100%;
  height: 400px;
  width: 500px;
  @media screen and (max-width: 520px) {
    width: 250px;
    height: 230px;
  }
`;

export const TitluProdus = styled.h4`
  color: black;
  text-align: left;
  display: flex;
  padding-top: 50px;
`;

export const ProductDetailsContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 250px 0px 0px 86px;
  color: black;
  background-color: white;

  @media screen and (max-width: 955px) {
    padding: 100px 0px 0px 220px;
  }
  @media screen and (max-width: 520px) {
    padding: 100px 20px 20px 100px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Stars = styled.span`
  color: gold;
  margin-right: 5px;
`;

export const RatingValue = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Reviews = styled.span`
  color: gray;
`;

export const Evaluate = styled.p`
  color: green;
  font-style: italic;
`;

export const LinkProdus = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const BigContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: white;
  background-color: white;
`;
export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  height: 220px;
  text-align: center;
  margin: 250px 20px 20px 76px;
  @media screen and (max-width: 1413px) {
    margin: 100px 20px 20px 191px;
  }
  @media screen and (max-width: 520px) {
    margin: 100px 20px 20px 50px;
  }
`;

export const Price = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

export const PriceInfo = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 20px;
`;

export const StockStatus = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: green;
`;

export const StockLevel = styled.div`
  margin-bottom: 5px;
`;

export const LastUpdate = styled.div`
  font-size: 10px;
  color: #777;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-bottom: 20px;
`;

export const QuantityLabel = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
`;

export const QuantityInput = styled.input`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  margin: 0 5px;
`;

export const AddToCartButton = styled.button`
  background-color: #28a745;
  width: 250px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 4px;
  &:hover {
    background: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
  }
`;

export const CartIcon = styled.span`
  margin-right: 5px;
`;

export const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 20px 100px;
  padding: 20px;
  background-color: white;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  color: #333;
`;
