// src/app/components/MyModal.js
'use client';

import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

// @project
import branding from '@/branding.json';
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';
import { TextField } from '@mui/material';
import { Basic } from 'next/font/google';
import BasicTextField from '@/components/BasicText';

const ElementData=[{
  label:"Nombre",
  text:"Nombre",
  placeholder:"Introduce tu nombre completo"
},
{
  label:"Email",
  text:"Email",
  placeholder:"Introduce tu email"
},
{
  label:"Telefono",
  text:"Telefono",
  placeholder:"Introduce tu telefono"
}];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ServerModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState('');

  return (
    <div>
      {/* Botón que abrirá el modal */}
      <Button onClick={handleOpen}>Abrir Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Alquiler</Typography>}
            icon={
              <CardMedia
                component="img"
                image="/assets/images/shared/celebration.svg"
                sx={{ width: 16, height: 16 }}
                alt="celebration"
                loading="lazy"
              />
            }
            size="small"
            sx={{ bgcolor: 'background.default', '& .MuiChip-label': { px: 1.5, py: 0.5 }, '& .MuiChip-icon': { ml: 1.25 } }}
          />
          <Typography variant="h5">Alquila tu cancha ahora</Typography>
        </Stack>
      
      
    
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Realiza el alquiler en el momento.
          Introoduce tus datos para registrar toda tu informacion.
        </Typography>
        <Box>
      {ElementData.map((item, index) => (
        <BasicTextField 
          key={index}
          text={item.text}
          label={item.label}
          placeholder={item.placeholder}
        />
      ))}
    </Box>
      </Stack>
      <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Siguente
      </Button>
    </Stack>
      </Modal>
    </div>
  );
}