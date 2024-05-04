import styled from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

export const Container = styled.div`
  width: 217px;
  height: 285px;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  box-shadow: 0px 0px 10px #e0e0e0;
  margin: 30px 30px 0 30px;
`;

export const ImageBanner = styled.img`
  width: 100%;
  height: 138px;
  
  object-fit: contain;
  margin-top: 10px;
`;

export const NamePriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const NameContainer = styled.div`
  font-family: "Montserrat", Times, serif;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  overflow-wrap: break-word;
  align-self: center;
  margin-left: 10px;
  
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  padding: 0 5px 0 5px;
  height: 26px;
  border-radius: 5px;
  background-color: #373737;
  margin-right: 10px;
`;

export const Price = styled.div`
  font-family: "Montserrat", Times, serif;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  color: #fff;
  white-space: nowrap;
`;

export const DescriptionContainer = styled.div`
  font-family: "Montserrat", Times, serif;
  font-size: 10px;
  font-weight: 300;
  text-align: left;
  overflow-wrap: break-word;
  padding: 10px;
`;

export const BuyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 100%;
  background-color: #0f52ba;
  border-radius:  0 0 12px 12px;
  position: absolute;
  bottom: 0;
`;

export const BagContainer = styled.img`
  width: 14px;
  height: 16px;
  margin-right: 15px;
  
`;

export const BuyContainer = styled.div`
  font-family: "Montserrat", Times, serif;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #fff;
`;
