import React from 'react';
import './App.scss';
import { 
  Navigation,
  Homepage,
  About,
  Workflow,
  Projects,
  ScrollProgress,
  Thanks
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
      <Thanks/>
    </div>
  );
}

export default App;
