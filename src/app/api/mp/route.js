// @next
import { NextResponse } from 'next/server';

// @third-party
import axios, { request } from 'axios';

import { MercadoPagoConfig, Order, Preference } from 'mercadopago';
const ACCES_TOKEN="TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710";
const NEXT_MP_KEY=process.env.NEXT_MP_KEY || 'TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710';

const client = new MercadoPagoConfig({
  accessToken: ACCES_TOKEN,
  options: { timeout: 5000 },
});
const order = new Order(client);

const preference = new Preference(client);
const URL_MP_BASE='https://api.mercadopago.com/instore/orders/qr/seller/collectors/1733800710/pos/SUC002POS001/qrs';
// POST handler for /mp/subscribe
// ... (variables y imports)

export async function POST(request) {
    
  console.log("---A---");
  preference.create({
    body: {
      items: [
        {
          id: 'dummy-id',
          title: 'Dummy Item',
          quantity: 1,
          unit_price: 10.0
        }
      ],
      notification_url: 'https://webhook.site/your-dummy-url'
    }
  }).then(console.log).catch(console.log);


  console.log("ACA ENTRO");
  const body = {
    "auto_return": "approved",
    "back_urls": {
      "success": "https://www.google.com/get?back_url=success",
      "failure": "https://www.google.com/get?back_url=failure",
      "pending": "https://www.google.com/get?back_url=pending"
    },
    "statement_descriptor": "TestStore",
    "binary_mode": false,
    "external_reference": "IWD1238971",
    "items": [
      {
        "id": "010983098",
        "title": "My Product",
        "quantity": 1,
        "unit_price": 2000,
        "description": "Description of my product",
        "category_id": "retail"
      }
    ],
    "payer": {
      "email": "test_user_12398378192@testuser.com",
      "name": "Juan",
      "surname": "Lopez",
      "phone": {
        "area_code": "11",
        "number": "1523164589"
      },
      "identification":{
        "type": "DNI",
        "number": "12345678"
      },
      "address": {
        "street_name": "Street",
        "street_number": 123,
        "zip_code": "1406"
      }
    },
    "payment_methods": {
      "excluded_payment_types": [],
      "excluded_payment_methods": [],
      "installments": 12,
      "default_payment_method_id": "account_money"
    },
    "notification_url": "https://www.your-site.com/webhook",
    "expires": true,
    "expiration_date_from": "2025-10-15T12:00:00.000-04:00",
    "expiration_date_to": "2026-10-17T12:00:00.000-04:00"
  };
  crear_link_pago();

  await order.create({ body }).then((cosa)=>{console.log("res : ",cosa)})
    .catch((error)=>{console.error("fallo ",error)});

  console.log("---B---")
  console.log("entro")
  try {
    const requestBody = await request.json(); 
    const response = await axios.post(
      URL_MP_BASE,
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${NEXT_MP_KEY}`
        }
      }
    );

    console.log('Response from Mercado Pago:', response.data);
    return NextResponse.json(response.data, { status: 200 }); 
  } catch (error) {
    console.error('Error subscribing:', error.response?.data || error.message);
    return NextResponse.json({
      error: error.response?.data || 'Internal Server Error'
    }, { status: error.response?.status || 500 });
  }
}
async function crear_link_pago() {
  const body = {
    "auto_return": "approved",
    "back_urls": {
      "success": "https://www.google.com/get?back_url=success",
      "failure": "https://www.google.com/get?back_url=failure",
      "pending": "https://www.google.com/get?back_url=pending"
    },
    "statement_descriptor": "TestStore",
    "binary_mode": false,
    "external_reference": "IWD1238971",
    "items": [
      {
        "id": "010983098",
        "title": "My Product",
        "quantity": 1,
        "unit_price": 2000,
        "description": "Description of my product",
        "category_id": "retail"
      }
    ],
    "payer": {
      "email": "test_user_12398378192@testuser.com",
      "name": "Juan",
      "surname": "Lopez",
      "phone": {
        "area_code": "11",
        "number": "1523164589"
      },
      "identification":{
        "type": "DNI",
        "number": "12345678"
      },
      "address": {
        "street_name": "Street",
        "street_number": 123,
        "zip_code": "1406"
      }
    },
    "payment_methods": {
      "excluded_payment_types": [],
      "excluded_payment_methods": [],
      "installments": 12,
      "default_payment_method_id": "account_money"
    },
    "notification_url": "https://www.your-site.com/webhook",
    "expires": true,
    "expiration_date_from": "2025-10-15T12:00:00.000-04:00",
    "expiration_date_to": "2026-10-17T12:00:00.000-04:00"
  };
  try {
    // const requestBody = await request.json();
    const response = await axios.post(
      "https://api.mercadopago.com/checkout/preferences",
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCES_TOKEN}`
        }
      }
    );

    console.log('respondio', response.data);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error subscribing:', error.response?.data || error.message);
    return NextResponse.json({
      error: error.response?.data || 'Internal Server Error'
    }, { status: error.response?.status || 500 });
  }
}