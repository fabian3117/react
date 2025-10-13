// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';
const example_title="Entrenemos \n Bjt";
const example_name_store0="Entrenamiento";
const example_name_store1="BJT";
const example_description="Entrenamientos personalizados adaptados a tus necesidades, inicia en mundo de lucha\n";
const example_chips_list = [
  { image: '/assets/images/shared/react.svg', title: 'Entrenamiento personalizado' },
  { image: '/assets/images/shared/next-js.svg', title: 'Preparacion para lucha' },
  { image: '/assets/images/shared/material-ui.svg', title: 'Inicio al mundo de lucha' },
  { image: '/assets/images/shared/typescript.svg', title: 'Comunidad' },
  // { image: '/assets/images/shared/javascript.svg', title: 'Ventaja 4' }
];
export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {example_name_store0}
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              {example_name_store1}
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: example_title,
  captionLine: example_description,
  primaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: example_chips_list
};
