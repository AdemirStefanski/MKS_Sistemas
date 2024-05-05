import { Container, ItemRemove, ItemImg, ItemName, ItemQuantContainer, ItemQuantText, ItemQuantSub, ItemQuantAtual, ItemQuantSum, ItemValue, ItemRemoveX } from "./cartItemStyles"

function CartItem() {
  return (
    <Container>

      <ItemRemove>
        <ItemRemoveX><span>X</span></ItemRemoveX>

      </ItemRemove>
      <ItemImg>

      </ItemImg>
      <ItemName>

      </ItemName>
      <ItemQuantContainer>
        <ItemQuantText><span>Qtd:</span></ItemQuantText>
        <ItemQuantSub></ItemQuantSub>
        <ItemQuantAtual></ItemQuantAtual>
        <ItemQuantSum></ItemQuantSum>
      </ItemQuantContainer>

      <ItemValue></ItemValue>

    </Container>
  )
}

export default CartItem