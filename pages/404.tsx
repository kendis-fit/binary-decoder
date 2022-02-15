import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matrix | not found</title>
      </Head>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '72px' }}>Not found</div>
    </>
  );
}

export default Home
