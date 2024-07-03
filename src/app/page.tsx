import PredictForm from './components/PredictForm';
import './styles/page.module.css';

const Home = () => {
  return (
    <div>
      <main>
        <h1 style={{textAlign: 'center'}}>Who Said It?</h1>
        <h3 style={{textAlign: 'center'}}>Enter text from a speech and I&lsquo;ll predict which President said it!</h3>
        <h5 style={{textAlign: 'center'}}>NOTE: for best performance, put between 1-5 sentences</h5>
        <PredictForm />
      </main>
    </div>
  );
};

export default Home;
