import React from 'react';
import './App.scss';
import Homepage from './Homepage';
import Cursor from './Cursor';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Cursor/>
//         <Homepage/>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Homepage/>
    </div>
  )
}

export default App;
