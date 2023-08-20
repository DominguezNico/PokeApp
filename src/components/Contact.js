
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Contacto = () => {
  return (
    <Card style={{ margin: 20, backgroundColor:"rgb(17, 24, 39)", color:"#FFF" }}>
      <CardContent>
        <Typography variant="h4">Contacto</Typography>
        <Typography variant="body1">
          Si tienes alguna duda o sugerencia sobre esta aplicación, puedes
          contactarme por email: ejemplo@correo.com
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contacto;
