import { InputContainer } from "./styles";

export function Input({value, onChange}) {
  return (
    <InputContainer>
      <input type="text" value={value} onChange={onChange} />
    </InputContainer>
  )
}