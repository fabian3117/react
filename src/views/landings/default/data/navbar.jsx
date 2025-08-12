// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

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
const NEXT_MP_KEY=process.env.NEXT_MP_KEY || 'TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710';
const URL_MP_BASE='https://api.mercadopago.com/instore/orders/qr/seller/collectors/1733800710/pos/SUC002POS001/qrs';
const alquilar_ahora_example=async () => {
  window.scrollTo(0, 1000);
try {
  const res = await fetch(URL_MP_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_MP_KEY}`
    },
    body: JSON.stringify(example_buy)
  });

  // 1. Verifica si la respuesta fue exitosa (código 2xx)
  if (!res.ok) {
    // Si no es exitosa, lanza un error con el estado de la respuesta
    const errorData = await res.json();
    throw new Error(`Error ${res.status}: ${JSON.stringify(errorData)}`);
  }

  // 2. Si la respuesta es exitosa, procesa los datos
  const data = await res.json();
  console.log('Respuesta de la API:', data);
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
    // { id: 'reservas', title: 'Reservas', link: SECTION_PATH },
    { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    pagesMegamenu,
    { id: 'contacto', title: 'Contacto', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
