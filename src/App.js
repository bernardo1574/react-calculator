import React, { useState } from 'react';

import InputFullSalary from './components/FullSalary/FullSalary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { calculateSalaryFrom } from './Helpers/salary';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

export default function App() {
  const [fullSalary, setFullSalary] = useState('');

  const handleInputChange = (inputValue) => {
    setFullSalary(inputValue.replace(/[^\d\s-/]/g, ''));
  };

  const calculateSalary = calculateSalaryFrom(fullSalary);

  return (
    <div className="container card">
      <h4 className="center-align"> React Salário </h4>
      <InputFullSalary onValue={fullSalary} onInputChange={handleInputChange} />
      <InputReadOnly onCalculate={calculateSalary} fullSalary={fullSalary} />
      <ProgressBarSalary onCalculate={calculateSalary} />
    </div>
  );
}
