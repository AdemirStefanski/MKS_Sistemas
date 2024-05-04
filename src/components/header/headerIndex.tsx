import { Container, LogoContainer, LogoMain, LogoSub, ButtonContainer, ShoppingCart, CartQty } from "./headerStyles";


import CartIcon from "../../assets/cartIcon.png";

function Header() {

  return (
    <Container>
      <LogoContainer>
        <LogoMain>
          MKS
        </LogoMain>
        <LogoSub>
          Sistemas
        </LogoSub>
      </LogoContainer>
      <ButtonContainer>
        <ShoppingCart  alt="" src={CartIcon} />
        
        <CartQty>

        </CartQty>
      </ButtonContainer>
    </Container>
  );

}

export default Header;