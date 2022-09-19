import type { NextPage } from 'next';
import Header from '../components/Header';
import Pricing from '../components/Pricing';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Pricing />
    </>
  );
};

export default Home;
