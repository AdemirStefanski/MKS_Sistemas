// import { Offcanvas } from "react-bootstrap"
// import { useShoppingCart } from "../../context/ShoppingCartContext"


// type ShoppingCartProps = {
//   isOpen: boolean
// }

// function ShoppingCart ({ isOpen }: ShoppingCartProps) {
//   const { closeCart } = useShoppingCart()
//   return (
//   <Offcanvas show={isOpen} onHide={closeCart} placement="end">
//     <Offcanvas.Header closeButton>
//       <Offcanvas.Title>Cart</Offcanvas.Title>
//     </Offcanvas.Header>
//   </Offcanvas>
//   )
// }

// export default ShoppingCart


import { toBeVisible } from "@testing-library/jest-dom/matchers"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { Container, CartHeader, HeaderText, HeaderCloseIconSphere, HeaderCloseIconX } from "./shoppingCartStyles"
import CartItem from "../cartItem/cartItemIndex"

type ShoppingCartProps = {
  isOpen: boolean
}

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart()
  return (
    <Container>
      <CartHeader>
        <HeaderText>
          <span> Carrinho<br/>de Compras</span>
        </HeaderText>
        <HeaderCloseIconSphere>
          <HeaderCloseIconX><span>X</span></HeaderCloseIconX>          
        </HeaderCloseIconSphere>
      </CartHeader>

      <CartItem />

    </Container>

  )

}

export default ShoppingCart

