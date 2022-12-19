import { useState } from "react"
import logo from "../assets/logo.png"
import { Input } from "../components/input/input"
import { Button } from "../components/button/button"
import { ItemRepository } from "../components/ItemRepository/ItemRepository"
import { Container, Rows } from "./styles"

import { api } from "../service/api"

export function App() {
  const [repos, setRepos] = useState([])
  const [currentRepos, setCurretRepos] = useState()

  const handleSearchRepo = async () =>{
    const {data} = await api.get(`repos/${currentRepos}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurretRepos('')
        return

      }
    }
    alert('Repositorio não encontrado.')
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id === id)
    console.log(newRepos)
  }

  return (
    <>
      <Container>
        <img src={logo} />
        <h3> Pesquise um repositório no GitHub</h3>

        <Rows>
          <Input value={currentRepos}
          onChange={(e)=> setCurretRepos(e.target.value)}/>

          <Button OnClick={handleSearchRepo} />
        </Rows>
        {repos.map(repo => <ItemRepository handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </Container>
    </>
  )
}
