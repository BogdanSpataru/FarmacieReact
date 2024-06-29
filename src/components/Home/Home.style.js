import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainerB = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0;
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
  background-color: #473b3b;
`;

export const HomeImageBackground = styled.img`
  width: 100%;
  padding: 0;
  height: auto;
  max-height: 800px;
`;

export const HomeText = styled.h1``;

export const TrendContainer = styled.div`
  display: flex;
  position: relative;
  width: 85%;
  max-height: 400px;
`;

export const Card = styled.div`
  margin: 0 10px 20px;
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 125px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #333;
  height: 20px;
`;

export const Price = styled.p`
  color: #e74c3c;
  font-size: 16px;
  display: flex;
`;

export const AddToCartButtonBand = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 26px;

  &:hover {
    background-color: darkgreen;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  width: auto;
  height: 50px;
  margin-top: 10px;
  color: black;
  overflow: hidden;
`;

export const TrendWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 360px;
`;

export const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  margin-right: 20px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: darkgrey;
  }
`;

export const Producer = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: darkblue;
  text-decoration: none;
  margin-top: 5px;
  display: flex;

  &:hover {
    color: #333;
  }
`;

export const Titleh3 = styled.h3`
  color: whitesmoke;
  width: 100%;
  position: relative;
  font-size: 22px;
  display: flex;
  left: 12%;
`;

export const LinkContainerProdus = styled(Link)`
  text-decoration: none;
`;
