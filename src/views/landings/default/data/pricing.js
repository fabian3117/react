// @project
import { BUY_NOW_URL, FREEBIES_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const pricing = {
  heading: 'Alquileres de cancha',
  caption: 'Selecciona la opcion que mas te convenga.',
  features: [
    { id: 1, label: '1 Mercadopago' },
    { id: 2, label: '2 QR' },
    { id: 3, label: '3 Efectivo' },
    // { id: 4, label: '193+ Component Blocks' },
    // { id: 5, label: 'Dark/Light Mode' },
    // { id: 6, label: 'Typescript Version' },
    // { id: 7, label: 'Design File (Figma)' },
    // { id: 8, label: 'Multiple Color Options' },
    // { id: 9, label: 'RTL' },
    { id: 10, label: 'Supbase Authentication' }
  ],
  plans: [
    {
      title: 'Cancha de Futbol 5',
      price: 1000,
      active: false,
      featureTitle: 'Caracteristicas',
      content: '',
      // contentLink: { children: 'license', href: 'https://mui.com/store/license/', ...linkProps },
      exploreLink: { children: 'Alquilar', href: FREEBIES_URL, ...linkProps },
      featuresID: [1, 3,2]
    },
    {
      title: 'Cancha de Futbol 11',
      active: false,
      price: 69,
      featureTitle: 'Caracteristicas',
      // content: 'Learn more about the Pro',
      // contentLink: { children: 'license', href: 'https://mui.com/store/license/', ...linkProps },
      exploreLink: { children: 'Alquiler', href: BUY_NOW_URL, ...linkProps },
      featuresID: [1,2,3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};
