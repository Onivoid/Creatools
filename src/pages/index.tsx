import Head from 'next/head'
import HeaderTypeIt from '@/components/headerTypeIt/HeaderTypeIt'
import { RSC_CONTENT_TYPE_HEADER } from 'next/dist/client/components/app-router-headers'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Creatools</title>
        <meta name="description" content="Application d'outils en ligne pour vos créations !" />
      </Head>
      <header className="lg:container mx-auto h-[50vh]">
        <div className='flex items-center justify-center h-full'>
          <h1 className='mr-2 text-4xl text-slate-700'>Besoin de</h1>
          <HeaderTypeIt />
        </div>
      </header>
    </div>
  )
}
