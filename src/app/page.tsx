import Head from 'next/head';
import PredictForm from './components/PredictForm';

const Home = () => {
  return (
    <div>
      <main>
        <h1>Who Said It?</h1>
        <h3>Enter a sentence from a speech and I&lsquo;ll predict which President said it!</h3>
        <PredictForm />
      </main>
    </div>
  );
};

export default Home;
