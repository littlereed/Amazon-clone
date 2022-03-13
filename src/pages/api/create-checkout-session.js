const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function(req, res) {
  const { items, email } = req.body;
  
  const transformedItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'gbp',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image]
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: ['shr_1KRFwWKVJ7ep0wOtvP9MK9ed'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA']
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image))
    },
  });

  res.status(200).json({ id: session.id});
}

//quantity -> it is a flat array ,even if i have two items they're going to be separate objects in that array 
//hence each one will hanve a quantity of one
//metadata中的email very important -> because it's going to be part of the crucial operation  which allows us  
//接上to push imformation in from strioe page into the correct place in firebase
