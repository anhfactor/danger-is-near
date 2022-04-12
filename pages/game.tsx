import type { NextPage } from "next";
import { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext } from 'react';
import AppContext from '@components/AppContext';
import ConnectWalletMessage from '@components/ConnectWalletMessage';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/game'),
  { ssr: false }
)

const Game: NextPage = () => {
  const { account } = useContext(AppContext);

  if (!account.accountId) {
    return <ConnectWalletMessage/>
  }

  return (
    <div>
      <Head>
        <title>Danger is near</title>
        <meta name="description" content="Danger is near" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DynamicComponentWithNoSSR /> 
      </main>
    </div>
  );
};

export default Game;
