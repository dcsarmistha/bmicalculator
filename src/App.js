import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }

    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory('Underweight ❗');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight ✅');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight ⚠️');
    } else {
      setCategory('Obese 🚨');
    }
  };

  return (
    <div className="App">
      <h1>BMI Calculator 💖</h1>
      <div>
        <input
          type="number"
          placeholder="Enter height in meters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate</button>
      </div>

      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
