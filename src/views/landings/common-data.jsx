// @mui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';
import { Themes } from '@/config';
import { MegaMenuType } from '@/enum';
import { ADMIN_PATH, BUY_NOW_URL, DOCS_URL, PAGE_PATH, PRIVIEW_PATH } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

/***************************  MEGAMENU 4 - FOOTER  ***************************/

function footerData() {
  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
      <Stack sx={{ gap: 1 }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
          <Typography variant="h5">Revisa la informacion de tu pago!</Typography>
          <Chip
            label={<Typography variant="caption">Te enviamos QR</Typography>}
            size="small"
            sx={{
              bgcolor: 'background.default',
              '& .MuiChip-label': { px: 1.5, py: 0.5 },
              display: { xs: 'none', sm: 'inline-flex' }
            }}
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
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Puedes ver informacion de tu reserva, Recuperar tu QR de inscripcion todo automatizado.
          Disfruta el partido y si nos necesitas.
        </Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{ display: { xs: 'none', sm: 'inline-flex' }, minWidth: 100, px: { xs: 2 }, py: 1.25 }}
        href={BUY_NOW_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contacto
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU LANDINGS  ***************************/

export const landingMegamenu = {
  id: 'landings',
  title: 'Reservas',
  megaMenu: {
    type: MegaMenuType.MEGAMENU4,
    popperOffsetX: 195,
    toggleBtn: { children: 'Landings' },
    menuItems: [
      {
        title: 'Ver reserva',
        theme: Themes.THEME_CRM,
        image: '/assets/images/mega-menu/crm-light.svg',
        status: 'Pro'
      },
      {
        title: 'Cancelar reserva',
        theme: Themes.THEME_AI,
        image: '/assets/images/mega-menu/ai-light.svg',
        status: 'Pro'
      },
      {
        title: 'Estado de pago',
        theme: Themes.THEME_CRYPTO,
        image: '/assets/images/mega-menu/crypto-light.svg',
        status: 'Pro'
      },
      // {
      //   title: 'Hosting',
      //   theme: Themes.THEME_HOSTING,
      //   image: '/assets/images/mega-menu/hosting-light.svg',
      //   status: 'Pro'
      // },
      // {
      //   title: 'PMS',
      //   theme: Themes.THEME_PMS,
      //   image: '/assets/images/mega-menu/pms-light.svg',
      //   status: 'Pro'
      // },
      // {
      //   title: 'HRM',
      //   theme: Themes.THEME_HRM,
      //   image: '/assets/images/mega-menu/hrm-light.svg',
      //   status: 'Pro'
      // },
      // {
      //   title: 'Plugin',
      //   theme: Themes.THEME_PLUGIN,
      //   image: '/assets/images/mega-menu/plugin-light.svg',
      //   status: 'Pro'
      // }
    ],
    footerData: footerData()
  }
};

/***************************  MEGAMENU 5 - BANNER  ***************************/

function bannerData() {
  return (
    <Stack sx={{ alignItems: 'flex-start', gap: 3, height: 1, justifyContent: 'center' }}>
      <Stack sx={{ gap: 1 }}>
        <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
          <Chip
            label={<Typography variant="subtitle2">Panel informativo</Typography>}
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
          <Typography variant="h5">Panel de informacion y reenvio!</Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          En caso de querer verificar mas informacion sobre tu reserva.
          Te dejamos una forma de busar toda la informacion asociada.
          No dudes en consultar.
        </Typography>
      </Stack>
      <Button href={ADMIN_PATH} variant="contained" sx={{ minWidth: 92, px: { xs: 2 }, py: 1.25 }}>
        Verificar reserva
      </Button>
    </Stack>
  );
}

/***************************  NAVBAR - MEGAMENU PAGES  ***************************/

export const pagesMegamenu = {
  id: 'pages',
  title: 'Pages',
  megaMenu: {
    type: MegaMenuType.MEGAMENU5,
    toggleBtn: { children: 'Pages' },
    popperWidth: 860,
    menuItems: [
      {
        title: 'General',
        itemsList: [
          { title: 'Sobre nosotros', link: { href: 'https://stage.saasable.io/about', ...linkProps } },
          // { title: 'Career', status: 'Pro' },
          { title: 'Reservas', link: { href: PAGE_PATH.privacyPolicyPage, ...linkProps } },
          { title: 'Contacto', status: 'Pro' },
          // { title: 'FAQs', status: 'Pro' },
          { title: 'Precios', status: 'Pro' }
        ]
      },
      // {
      //   title: 'Maintenance',
      //   itemsList: [
      //     { title: 'Coming Soon', status: 'Pro' },
      //     { title: 'Error 404', link: { href: PRIVIEW_PATH.error404, ...linkProps } },
      //     { title: 'Error 500', link: { href: PRIVIEW_PATH.error500, ...linkProps } },
      //     { title: 'Under Maintenance', status: 'Pro' }
      //   ]
      // },
      {
        title: 'Redes',
        itemsList: [
          { title: 'Instagram', link: { href: 'https://blog.saasable.io/', ...linkProps } },
          { title: 'Facebook', link: { href: DOCS_URL, ...linkProps } },
          { title: 'Whatssapp', link: { href: branding.company.socialLink.support, ...linkProps } },
          {
            title: 'Telefono',
            status: 'ICON',
            // link: { href: branding.company.socialLink.discord, ...linkProps }
          },
          { title: 'Direccion', 
            status: 'Maps',
            
            // link: { href: 'https://mui.com/store/terms/', ...linkProps } 
          }
        ]
      }
    ],
    bannerData: bannerData()
  }
};
