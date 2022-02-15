import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';

import translator from '../helpers/translator';
import Matrix from '../components/matrix';
import { useState } from 'react';

interface Props {
  input: string;
  output: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.q;
  if (typeof code === 'string') {
    try {
      const output = translator(code);
      return { props: { input: code, output } };
    } catch {
      return { notFound: true };
    }
  }
  return { notFound: true };
}

const Home: NextPage<Props> = ({ input, output }) => {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <>
      <Head>
        <title>Matrix | binary</title>
      </Head>
      <Matrix type="Input" text={input} onFinish={() => setShowOutput(true)} />
      {
        showOutput ? (
          <Matrix type="Output" text={output} speed={100} />
        ) : null
      }
    </>
  );
}

export default Home
