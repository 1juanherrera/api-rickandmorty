import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Character from './components/Character'

function App() {

  const [ dataCharacters, setDataCharacters ] = useState([])
  const [ name, setName ] = useState('Rick')

  const getData = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(resp => {
        console.log(resp.data.results)
        setDataCharacters(resp.data.results)
     } )
    .catch(error => console.error(error))

  }

  useEffect(() => {
    getData()
  }, [name])

  const searchCharacter = (e) => {
    e.preventDefault()

    setName( e.target[0].value.toLowerCase() )
  }
  

  return (
    <div className='App'>
      <h1>Rick and Morty</h1>
      
      <form onSubmit={(e) => searchCharacter(e)}>
        <input type="text" placeholder='Buscar por nombre' />
        <button type='submit'>Buscar</button>
      </form>
      {
        dataCharacters.map((character, index) => <Character
           key={`character-${index}`} data={character}
        />)
      }
    </div>
  )
}

export default App
