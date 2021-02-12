import Head from 'next/head'
import HeaderOpen from '../components/common/HeaderOpen'
import Slider from '../components/common/Slider'
import Maintext from '../components/common/MainText'
import NavDesktop from '../components/common/NavDesktop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prueba</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/qfb1axj.css"></link>
     </Head>
        <HeaderOpen />
        <NavDesktop />
      <body className="bg-primary pt-10 flex flex-col justify-center">
        <Slider />
        <Maintext/>
      </body>
    </>
  )
}