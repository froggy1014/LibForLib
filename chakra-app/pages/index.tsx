import type { NextPage } from 'next';
import { Features } from '../components/Features';
import Header from '../components/Header';
import Pricing from '../components/Pricing';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  );
};

export default Home;
