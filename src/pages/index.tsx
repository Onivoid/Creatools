import Head from 'next/head'
import HeaderTypeIt from '@/components/headerTypeIt/HeaderTypeIt'
import Link from 'next/link'

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
      <section className='bg-violet-500 min-h-[50vh] py-20'>
        <div className="lg:container mx-auto flex flex-col items-center text-slate-50">
          <h1 className='text-4xl font-bold mb-20'>Nos Outils</h1>
          <div className='grid grid-cols-2  w-full'>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-bold mb-2'>Favicons</h2>
              <p className=' text-slate-200'>Générez vos favicons en un clique grâce à notre outil de génération de favicons.</p>
              <p className=' text-slate-200'>L&apos;outil vous générera des icones en plusieurs dimmenssions :</p>
              <ul className=' text-slate-200 py-5 pl-5'>
                <li>- 16x16, 32x32 et autres, pour vos icônes Web et Mobiles,</li>
                <li>- en format .ico et .png pour toutes vos utilisations,</li>
                <li>- fournis en .zip ou téléchargeable séparément.</li>
              </ul>
              <Link href='/favicons' 
                className='rounded-full 
                  bg-slate-50 
                  text-violet-500
                  hover:bg-violet-300
                  hover:text-slate-50
                  transition-all
                  font-bold 
                  py-2 px-5
                  mt-5 
                  max-w-max'> Générer mes Favicons </Link>
            </div>
            <div className='flex flex-col text-slate-50'>
              <h2 className='text-2xl font-bold  mb-2 '>Outil 2</h2>
              <p className=' text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.</p>
              <p className=' text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.</p>
              <ul className=' text-slate-200 py-5 pl-5'>
                <li>- Lorem ipsum dolor sit amet,</li>
                <li>- Lorem ipsum dolor sit amet,</li>
                <li>- Lorem ipsum dolor sit amet,</li>
              </ul>
              <Link href='/' 
                className='rounded-full 
                  bg-slate-50 
                  text-violet-500
                  hover:bg-violet-300
                  hover:text-slate-50
                  transition-all
                  font-bold 
                  py-2 px-5
                  mt-5 
                  max-w-max'> Outil 2 </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
