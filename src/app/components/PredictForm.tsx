'use client'; // Ensure this component can use client-side features

import { useState, FormEvent } from 'react';
import axios from 'axios';

interface PredictionResult {
  prediction: string;
  [key: string]: any; // Adjust according to your API response structure
}

const PredictForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://edwjin-docker-classifier.hf.space/predict', { text });
      setResult(response.data);
    } catch (err) {
      setError('Error making prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
          required
        />
        <br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {result && <div>Prediction: {JSON.stringify(result)}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default PredictForm;
