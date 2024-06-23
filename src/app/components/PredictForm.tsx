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
    <div 
      style={{
        width: '100%',        // Set width to 100% of its container
        height: '100%',       // Set height to 100% of its container
        display: 'flex',      // Use flexbox layout
        justifyContent: 'center',  // Center content horizontally
        flexDirection: 'column', 
      }}
    >
      <form 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
        onSubmit={handleSubmit}
      >
        <textarea
          style={{
            width: '50vw',
            height: '25vh',
            borderRadius: '5px',        // Slightly rounded corners
            border: '2px solid black',  // Slightly thick black outline
            padding: '15px',
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="The man who . . ."
          required
        />
        <br/>
        <button 
          id="submit-button"
          style={{
            fontSize: '18px', // Increase the font size to make it slightly bigger
            padding: '10px 20px', // Increase padding for better spacing
            backgroundColor: 'blue', // Light-blue background
            color: 'white', // White text
            border: 'none', // Remove default border
            borderRadius: '5px', // Optional: add rounded corners
            cursor: 'pointer', // Change cursor to pointer on hover
            transition: 'background-color 0.3s' // Smooth transition for hover effect
          }}
          onMouseOver={() => { // Optional: Add hover effect
            let buttonElem = document.getElementById('submit-button');

            if(buttonElem !== null && buttonElem !== undefined) {
              buttonElem.style.backgroundColor = 'deepskyblue';
            }
          }}
          onMouseOut={() => { // Optional: Reset background color on mouse out
            let buttonElem = document.getElementById('submit-button');

            if(buttonElem !== null && buttonElem !== undefined) {
              buttonElem.style.backgroundColor = 'blue';
            }
          }}
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>
      {result && <div style={{textAlign: 'center', marginTop: '15px'}}>Prediction: {JSON.stringify(result)}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default PredictForm;
