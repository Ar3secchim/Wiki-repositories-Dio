import { ItemContainer } from './stytes'

export function ItemRepository({repo, handleRemoveRepo}) {
  const handleRemove = () =>{
    handleRemoveRepo(repo.id)
  }

  return (
    <>
      <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <br/>
        <a href={repo.html_url} target="_blank" >Ver repositório</a><br />
        <a href="">Remover</a>
        <hr />
      </ItemContainer>
    </>
  )
}