import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #fad961, #f76b1c);
  color: white;
  padding: 20px 20px 0;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  left: 20px;
  bottom: 0;
  height: 250px;
  justify-content: center;
  display: flex;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 25px 0 0 25px;
  border: none;
  width: 250px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 0 25px 25px 0;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  outline: none;
  height: 44px;

  &:hover {
    background-color: #45a049;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;
