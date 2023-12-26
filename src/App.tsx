import { Grid } from '@chakra-ui/react'
import './App.css'
import GameGrid from './components/GameGrid'
import { GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GenresList from './components/GenresList'
import { useEffect, useState } from 'react'
import { Genre } from './hooks/useGenres'


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  useEffect(() => {
    console.log(selectedGenre)
  }, [selectedGenre])

  return <Grid 
  // templateAreas={`"nav nav" "aside main"`}
  templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  >
    <GridItem area={'nav'}>
      <NavBar />
    </GridItem>
    <Show above='lg'>
      <GridItem area={'aside'} paddingX={'25px'}>
        <GenresList onSelectGenre={() => setSelectedGenre(selectedGenre)} />
      </GridItem>
    </Show>
    <GridItem area={'main'}>
      <GameGrid />
    </GridItem>
  </Grid>
  
}

export default App
