import Header from "../components/Header"
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';


function success() {

  const router = useRouter();
    return (
        <div className='bg-green-100 h-screen'>
          <Header />

          <main className='max-w-screen-lg mx-auto bg-white'>
            <div className='flex flex-col p-10'>
              <div className='flex items-center space-x-2 mb-5'>
                <CheckCircleIcon class='text-green-500 h-10' />
                <h1 className='text-3xl'>
                  Thank you, your order has been confirmed.
                </h1>
              </div>
              <p>
                Thank you for shopiing with us. We'll send a confirmation once 
                item has shipped ,if you would like to check the status of your
                order(s) please press the link below.
              </p>
              <button onClick={() => router.push('/')} className='button mt-8'>Go to Homepage</button>
            </div>
          </main>
        </div>
    )
}

export default success;