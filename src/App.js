import React from 'react';
import './App.scss';
import { 
  Navigation,
  Homepage,
  About,
  Workflow,
  Projects,
  ScrollProgress
 } from './components';

function App() {

  // const breakpoint = 850;

  return (
    <div className="App">
      <ScrollProgress/>
      <Navigation/>
      <Homepage/>
      <About/>
      <Projects/>
      <Workflow/>
    </div>
  );
}

export default App;
