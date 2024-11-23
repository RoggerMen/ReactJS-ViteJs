import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
//import CharacterWithSkeleton from "./Components/CharacterWithSkeleton";

import Character from "./Components/Character";
import CharacterSkeleton from "./Components/CharacterSkeleton";

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  // Agrega las propiedades que consideres necesarias del personaje
}

const fakePromise = () => new Promise( (resolve) => setTimeout(resolve, 4000));

function App() {

  const [data, setData] = useState<{results:CharacterData[]} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setTimeout(() => {
      getData();
    //},4000)
  }, []);

  const getData = async () =>{
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" component="h1" textAlign="center" mb={3}>
        Rick and Morty
      </Typography>

      <Box sx={{ display: "grid", gap: 2, maxWidth: 250, mx: "auto" }}>
        {
          loading ?(
            Array.from(new Array(4)).map((character, index) => (
              <CharacterSkeleton 
              key={index}
              />
              // <CharacterWithSkeleton loading={loading} data={character} key={index} />
            ))
          )
        :
        data?.results.map((character) => (
          <Character 
            key={character.id}
            data={character}
          />
          // <CharacterWithSkeleton loading={loading}
          //   key={character.id}
          //   data={character}
          // />
        ))
        }
        {/* <Character /> */}

        {/* <CharacterSkeleton /> */}
      </Box>
    </Container>
  );
}

export default App;
