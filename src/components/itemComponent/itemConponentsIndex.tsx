import {
  Container,
  ImageBanner,
  NamePriceContainer,
  NameContainer,
  PriceContainer,
  DescriptionContainer,
  BuyButton,
  BagContainer,
  BuyContainer,
  Price,
} from "./itemComponentStyles";

import BagIcon from "../../assets/shoppingBagIcon.png";
import { useShoppingCart } from "../../context/ShoppingCartContext";

interface Props {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: string;
}

// function ItemComponent(props: Props) {
//   return (
//     <Container>
//       <ImageBanner
//         alt=""
//         src={props.photo}
//       />
//       <NamePriceContainer>
//         <NameContainer>{props.name}</NameContainer>
//         <PriceContainer>
//           <Price>{props.price}</Price>
//         </PriceContainer>
//       </NamePriceContainer>
//       <DescriptionContainer>{props.description}</DescriptionContainer>
//       <BuyButton>
//         <BagContainer alt="Shopping Cart" src="BagIcon" />
//         <BuyContainer>COMPRAR</BuyContainer>
//       </BuyButton>
//     </Container>
//   );
// }

// function ItemComponent() {
//   return (
//     <Container>
//       <ImageBanner src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp" />
//       <NamePriceContainer>
//         <NameContainer>AirPods</NameContainer>
//         <PriceContainer>
//           <Price>R$1200</Price>
//         </PriceContainer>
//       </NamePriceContainer>
//       <DescriptionContainer>Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.</DescriptionContainer>
//       <BuyButton>
//         <BagContainer src={BagIcon} />
//         <BuyContainer>COMPRAR</BuyContainer>
//       </BuyButton>
//     </Container>
//   );
// }

// function ItemComponent({item}: any) {
//   return (
//     <Container>
//       <ImageBanner src={item.photo} />
//       <NamePriceContainer>
//         <NameContainer>{item.name}</NameContainer>
//         <PriceContainer>
//           <Price>R$ {Math.floor(Number(item.price))}</Price>
//         </PriceContainer>
//       </NamePriceContainer>
//       <DescriptionContainer>{item.description}</DescriptionContainer>
//       <BuyButton>
//         <BagContainer src={BagIcon} />
//         <BuyContainer>COMPRAR</BuyContainer>
//       </BuyButton>
//     </Container>
//   );
// }

function ItemComponent(props: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity: number = getItemQuantity(props.id);

  return (
    <Container>
      <ImageBanner src={props.photo} />
      <NamePriceContainer>
        <NameContainer>{props.name}</NameContainer>
        <PriceContainer>
          <Price>R$ {props.price}</Price>
        </PriceContainer>
      </NamePriceContainer>
      <DescriptionContainer>{props.description}</DescriptionContainer>
      <BuyButton onClick={() => increaseCartQuantity(props.id)}>
        <BagContainer src={BagIcon} />
        <BuyContainer>COMPRAR</BuyContainer>
      </BuyButton>
    </Container>
  );
}

export default ItemComponent;
