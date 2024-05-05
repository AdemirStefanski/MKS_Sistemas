import styled from "styled-components";
import "@fontsource/montserrat";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";



export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 486px;
  height: 100vh;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CartHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: top;
  margin-top: 39px;
  padding-bottom: 50px;
  

`;

export const HeaderText = styled.div`
font-family: "Montserrat", Times, serif;
font-size: 27px;
font-weight: 700;
color: #fff;
margin-left: 48px;


`;
export const HeaderCloseIconSphere = styled.div<{ display?: string}>`
width: 38px;
height: 38px;
border-radius: 50%;
background-color: #000;
margin-right: 22px;
//display: flex;
display: ${({ display }) => display? display : 0 };
  display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const HeaderCloseIconX = styled.div`
font-family: "Montserrat", Times, serif;
font-size: 22px;
font-weight: 400;
color: #fff;

`;