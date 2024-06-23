import PredictForm from './components/PredictForm';
import './styles/page.module.css';

const Home = () => {
  return (
    <div>
      <main>
        <h1 style={{textAlign: 'center'}}>Who Said It?</h1>
        <h3 style={{textAlign: 'center'}}>Enter a sentence from a speech and I&lsquo;ll predict which President said it!</h3>
        <PredictForm />
      </main>
    </div>
  );
};

export default Home;
