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

// @project
import branding from '@/branding.json';
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';


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
        <div>
 <OutlinedInput
      id="input-search-header"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <IconSearch stroke={1.5} size="16px" />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <HeaderAvatar>
            <IconAdjustmentsHorizontal stroke={1.5} size="20px" />
          </HeaderAvatar>
          <Box sx={{ ml: 2 }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                bgcolor: 'orange.light',
                color: 'orange.dark',
                '&:hover': {
                  bgcolor: 'orange.dark',
                  color: 'orange.light'
                }
              }}
              {...bindToggle(popupState)}
            >
              <IconX stroke={1.5} size="20px" />
            </Avatar>
          </Box>
        </InputAdornment>
      }
      aria-describedby="search-helper-text"
      slotProps={{ input: { 'aria-label': 'weight', sx: { bgcolor: 'transparent', pl: 0.5 } } }}
      sx={{ width: '100%', ml: 0.5, px: 2, bgcolor: 'background.paper' }}
    />
        </div>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Realiza el alquiler en el momento.
          Introoduce tus datos para registrar toda tu informacion.
        </Typography>
      </Stack>
      <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Siguente
      </Button>
    </Stack>
      </Modal>
    </div>
  );
}