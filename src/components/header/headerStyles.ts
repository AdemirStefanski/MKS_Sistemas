import styled from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/600.css";

export const Container = styled.header`
  width: 100%;
  height: 101px;
  background-color: #0f52ba;
  padding: 0 90px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const LogoContainer = styled.div`
  display: inline-block;

  align-items: flex-end;
`;

export const LogoMain = styled.span`
  font-family: "Montserrat", Times, serif;
  font-size: 40px;
  font-weight: 600;
  text-align: left;
  color: #fff;
`;

export const LogoSub = styled.span`
  height: 100%;
  font-family: "Montserrat", Times, serif;
  font-size: 20px;
  font-weight: 300;
  text-align: left;
  margin-left: 8px;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90px;
  height: 45px;
  gap: 0px;
  border-radius: 8px 8px 8px 8px;

  background-color: #ffffff;
`;

export const ShoppingCart = styled.img`
  width: 19.01px;
  height: 18px;
  top: 43px;

  gap: 0px;
`;

export const CartQty = styled.div``;
