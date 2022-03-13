module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
  
}
//stripe public key 需要通过这个配置文件 is exposed to website
//process这一行通过.env起作用