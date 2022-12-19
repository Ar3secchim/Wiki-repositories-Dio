import logo from "../assets/logo.png"
import { Input } from "../components/input/input"
import { ItemRepository } from "../components/ItemRepository/ItemRepository"
import { Container } from "./styles"

export function App() {
  return (
    <>
      <Container>
        <img src={logo} />
        <h3> Pesquise um repositório no GitHub</h3>

        <Input />
        <ItemRepository />
      </Container>
    </>
  )
}
