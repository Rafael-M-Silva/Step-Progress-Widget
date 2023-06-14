import React, { useState } from "react";
import Navigation from "./assets/components/Navegation";

function App() {

  const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className="App">
      <Navigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></Navigation>
      <p>Selected Step: {currentStep}</p>
      <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Next Step</button>
    </div>
  );
}

export default App;
