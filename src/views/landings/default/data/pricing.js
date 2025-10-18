// @project
import { BUY_NOW_URL, FREEBIES_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const price_level_0="20.000";
const price_level_1="40.000";
const price_level_full="80.000";
const price_level_class="15.000";
const text_redirect="Mercadopago";
export const pricing = {
  heading: 'Precios',
  caption: 'Selecciona la opcion que mas te convenga.',
  features: [
    { id: 1, label: '1 Mercadopago' },
    { id: 2, label: '2 QR' },
    { id: 3, label: '3 Efectivo' },
  ],
  plans: [
    {
      title: 'Clases 1 vez por semana',
      price: price_level_0,
      active: false,
      featureTitle: 'Caracteristicas',
      content: '',
      // contentLink: { children: 'license', href: 'https://mui.com/store/license/', ...linkProps },
      exploreLink: { children: text_redirect, href: FREEBIES_URL, ...linkProps },
      featuresID: [1, 3,2]
    },
    // {
    //   title: 'Clases 2 vez por semana',
    //   active: false,
    //   price: price_level_1,
    //   featureTitle: 'Caracteristicas',
    //   // content: 'Learn more about the Pro',
    //   // contentLink: { children: 'license', href: 'https://mui.com/store/license/', ...linkProps },
    //   exploreLink: { children: text_redirect, href: BUY_NOW_URL, ...linkProps },
    //   featuresID: [1,2,3, 4, 5, 6, 7, 8, 9, 10]
    // },
    {
      title: 'Plan full',
      active: false,
      price: price_level_full,
      featureTitle: 'Caracteristicas',
      exploreLink: { children: text_redirect, href: BUY_NOW_URL, ...linkProps },
      featuresID: [1,2,3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      title: 'Pago por clases',
      active: false,
      price: price_level_class,
      featureTitle: 'Caracteristicas',
      exploreLink: { children: text_redirect, href: BUY_NOW_URL, ...linkProps },
      featuresID: [1,2,3, 4, 5, 6, 7, 8, 9, 10]
    }
  ]
};
