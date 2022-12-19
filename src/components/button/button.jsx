import { Container } from "./styles";
import {SearchAlt} from "@styled-icons/boxicons-regular/SearchAlt"

export function Button({OnClick}) {
  return (
    <Container onClick={OnClick}>
      <SearchAlt color="white" />
    </Container>
  )
}