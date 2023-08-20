import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../../styles/pokemon/PokemonCard.css'

const PokemonCard = ({ name, type, image }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '16px',
        backgroundColor: "rgb(17, 24, 39)"
      }}
    >
      <img className='cardImage_pokemon_card' src={image} alt={name} />
      <CardContent 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        }} 
      >
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;