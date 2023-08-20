import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <Card style={{ margin: 20, backgroundColor:"rgb(17, 24, 39)", color:"#FFF" }}>
      <CardContent>
        <Typography variant="h4">Bienvenido a la Pokemon App</Typography>
        <Typography variant="body1">
          Esta es una aplicación creada con React, React Router, Material UI y
          Axios para mostrar una lista de pokemones y buscarlos por nombre.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;