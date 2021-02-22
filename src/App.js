import React from 'react';
import './App.scss';
import Homepage from './Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        xMain: 0,
        yMain: 0,
        xTrailing: 0,
        yTrailing: 0
    }
  }

  handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      this.setState({
          xMain: clientX,
          yMain: clientY
      }, () => {
          setTimeout(() => {
              this.setState({
                  xTrailing: clientX,
                  yTrailing: clientY
              });
          }, 120);
      })
  }

  render() {
    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;
    return (
      <div className="App" onMouseMove={e => {this.handleMouseMove(e)}}>
        <div className="cursors">
          <div className="cursor fade-in" style={{left: xMain, top: yMain}}/>
          <div className="cursor fade-in" style={{left: xTrailing, top: yTrailing}}/>
        </div>
        <Homepage/>
      </div>
    )
  }
}

export default App;
