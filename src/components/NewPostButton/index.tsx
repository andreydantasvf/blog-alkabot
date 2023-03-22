import { GrAddCircle } from "react-icons/gr";

import { Container } from "./styles";

export function NewPostButton() {
  return (
    <Container>
      <GrAddCircle size={20} />
      Adicionar post
    </Container>
  )
}