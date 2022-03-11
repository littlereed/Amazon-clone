import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';
import { getSession } from 'next-auth/react';

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
        
      </Head>
    
     <Header />
      <main className='max-w-screen-2xl max-auto'>
        <Banner />

       <ProductFeed products={products}/>
       
      </main>
    </div>
  )
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session
    }
  }
}