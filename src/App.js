import React from 'react';
import './App.scss';
import Homepage from './Homepage';
import Navbar from './Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // initial state for cursor position
        xMain: 897.5,
        yMain: 470.8,
        xTrailing: 897.5,
        yTrailing: 470.8
    }
  }
  // update cursor position on mouse move
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
          }, 100);
      })
  }

  render() {
    const {
      xMain,
      yMain,
      xTrailing,
      yTrailing
    } = this.state;
    
    // cursor effect on hover over links
    const cursor = document.querySelector('.cursor:nth-child(2)')
    const links = document.querySelectorAll('a, button')

    links.forEach(link => {
      link.addEventListener('mouseenter', e => {
        cursor.classList.add('enlarged')
      })
      link.addEventListener('mouseout', e => {
        cursor.classList.remove('enlarged')
      })
    })
    return (
      <div className="App" onMouseMove={e => {this.handleMouseMove(e)}}>
        <div className="cursors">
          <div className="cursor fade-in" style={{left: xMain, top: yMain}}/>
          <div className="cursor fade-in" style={{left: xTrailing, top: yTrailing}}/>
        </div>
          <Navbar/>
          <Homepage/>
      </div>
    )
  }
}

export default App;
