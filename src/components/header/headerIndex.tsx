import { Container, LogoContainer, LogoMain, LogoSub, ButtonContainer, ShoppingCart, CartQty } from "./headerStyles";


import CartIcon from "../../assets/cartIcon.png";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function Header() {
  const {openCart, cartQuantity} = useShoppingCart()

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
      
      <ButtonContainer onClick={openCart}>
        <ShoppingCart  alt="" src={CartIcon} />
        
        <CartQty>
          {cartQuantity}
        </CartQty>
      </ButtonContainer>
    </Container>
  );

}

export default Header;