// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';
import ServerModal from '../ServerModal';
import { MercadoPagoConfig, Order, Preference } from 'mercadopago';
const ACCES_TOKEN="TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710";
const client = new MercadoPagoConfig({
  accessToken: ACCES_TOKEN,
  options: { timeout: 5000 },
});
const order = new Order(client);

const preference = new Preference(client);


/***************************  DEFAULT - NAVBAR  ***************************/
const example_buy={
  	"external_reference": "987654",
	"notification_url": "https://www.yourdomain.com/ipn",
	"total_amount": 1000,
	"items": [
		{
			"sku_number": "12312312",
			"category": "electronics",
			"title": "Auriculares",
			"description": "Auriculares",
			"quantity": 1,
			"unit_measure": "unit",
			"unit_price": 1000,
			"total_amount": 1000
		}
	],
	"title": "Compra en tienda",
	"description": "Compra en tienda"
};
// const NEXT_MP_KEY=process.env.NEXT_MP_KEY || 'TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710';
// const URL_MP_BASE='https://api.mercadopago.com/instore/orders/qr/seller/collectors/1733800710/pos/SUC002POS001/qrs';
const alquilar_ahora_example=async () => {
  //
  //
  // preference.create({
  //   body: {
  //     items: [
  //       {
  //         id: 'dummy-id',
  //         title: 'Dummy Item',
  //         quantity: 1,
  //         unit_price: 10.0
  //       }
  //     ],
  //     notification_url: 'https://webhook.site/your-dummy-url'
  //   }
  // }).then(console.log).catch(console.log);
  //
  //
  // console.log("ACA ENTRO");
  // const body = {
  //   "auto_return": "approved",
  //   "back_urls": {
  //     "success": "https://www.google.com/get?back_url=success",
  //     "failure": "https://www.google.com/get?back_url=failure",
  //     "pending": "https://www.google.com/get?back_url=pending"
  //   },
  //   "statement_descriptor": "TestStore",
  //   "binary_mode": false,
  //   "external_reference": "IWD1238971",
  //   "items": [
  //     {
  //       "id": "010983098",
  //       "title": "My Product",
  //       "quantity": 1,
  //       "unit_price": 2000,
  //       "description": "Description of my product",
  //       "category_id": "retail"
  //     }
  //   ],
  //   "payer": {
  //     "email": "test_user_12398378192@testuser.com",
  //     "name": "Juan",
  //     "surname": "Lopez",
  //     "phone": {
  //       "area_code": "11",
  //       "number": "1523164589"
  //     },
  //     "identification":{
  //       "type": "DNI",
  //       "number": "12345678"
  //     },
  //     "address": {
  //       "street_name": "Street",
  //       "street_number": 123,
  //       "zip_code": "1406"
  //     }
  //   },
  //   "payment_methods": {
  //     "excluded_payment_types": [],
  //     "excluded_payment_methods": [],
  //     "installments": 12,
  //     "default_payment_method_id": "account_money"
  //   },
  //   "notification_url": "https://www.your-site.com/webhook",
  //   "expires": true,
  //   "expiration_date_from": "2025-10-15T12:00:00.000-04:00",
  //   "expiration_date_to": "2026-10-17T12:00:00.000-04:00"
  // };
  //
  // order.create({ body }).then(console.log).catch(console.error);



  // window.scrollTo(0, 1000);
//  ServerModal();

  // return;
const  NEXT_MP_KEY=ACCES_TOKEN;
try {
  const res = await fetch("/api/mp/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_MP_KEY}`
    },
    body: JSON.stringify(example_buy)
  });

  console.log('Respuesta de la API:', res);
  alert('Alquiler procesado con éxito!');

} catch (error) {
  // 3. Captura cualquier error, ya sea de red o de la API
  console.error('Error al alquilar ahora:', error.message);
  alert(`Error al alquilar ahora: ${error.message}`);
} finally {
  // Este bloque siempre se ejecuta, independientemente del resultado
  console.log('Proceso de alquiler finalizado.');
}
}
const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-github" color="primary.main" size={18} />,
    href: FREEBIES_URL,
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Alquila ahora',
    //  href: BUY_NOW_URL,
      ...linkProps,
      onClick: alquilar_ahora_example 
    },
  navItems: [
    { id: 'home', title: 'Inicio', link: '/' },
    landingMegamenu,
    // { id: 'reservas', title: 'Clases', link: SECTION_PATH },
    // { id: 'dashboard', title: ' ACA Dashboard', link: ADMIN_PATH, ...linkProps },
    pagesMegamenu,
    { id: 'contacto', title: 'Contacto', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
