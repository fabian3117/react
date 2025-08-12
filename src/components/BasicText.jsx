'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({ text ,label}) {
  const [name, setName] = React.useState(text || '');

  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
    // Validación simple para mostrar o ocultar el error
    if (event.target.value.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name-input"
        label={label || "Nombre"}
        variant="outlined"
        value={name}
        onChange={handleChange}
        error={error} // Propiedad que muestra el estado de error
        helperText={error ? "El nombre debe tener al menos 3 caracteres." : "Introduce tu nombre completo."}
      />
    </Box>
  );
}