import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, TextField} from '@mui/material';
import PokemonCard from './PokemonCard';
const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => {
        // Obtener los tipos y las imágenes de cada pokemon usando Promise.all
        Promise.all(
          response.data.results.map((pokemon) =>
            axios.get(pokemon.url).then((res) => ({
              name: pokemon.name,
              type: res.data.types[0].type.name,
              image: res.data.sprites.front_default,
            }))
          )
        ).then((data) => {
          setPokemonList(data);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Uso AppBar y Toolbar de MUI para la barra de navegación con la propiedad sticky para que nos siga al hacer scroll */}
      <AppBar position="sticky"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgb(17, 24, 39)',
          color: '#FFF',
        }}
      >
        <Toolbar>
          {/* Uso TextField de MUI para la búsqueda */}
          <TextField
            sx={{
              marginTop:'10px',
              marginBottom:'10px',
              width: '90vw',
            }}
            label="Buscar Pokemon"
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
            mode= 'dark'
          />
        </Toolbar>
      </AppBar>

      {/* Muestro un mensaje de carga mientras se obtienen los datos de la API */}
      {loading && (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Cargando...</p>
      )}
      
      {/* Mapeao los pokemons filtrados a PokemonCard */}
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
        />
      ))}
      
      {/*Pregunto si la lista de pokemones filtrado es igual a 0, si es asi muestro un mensaje*/}
      {filteredPokemons.length === 0 && !loading && (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          No se encontraron pokemones
        </p>
      )}
    </div>
  );
}

export default Pokemon;
