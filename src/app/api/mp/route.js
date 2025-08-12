// @next
import { NextResponse } from 'next/server';

// @third-party
import axios from 'axios';

const NEXT_MP_KEY=process.env.NEXT_MP_KEY || 'TEST-3257957245266231-120618-3f59f5b2cf5a168dc5f9c3f9e7ecaaa9-1733800710';
const URL_MP_BASE='https://api.mercadopago.com/instore/orders/qr/seller/collectors/1733800710/pos/SUC002POS001/qrs';
// POST handler for /mp/subscribe
// ... (variables y imports)

export async function POST(request) {
    
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