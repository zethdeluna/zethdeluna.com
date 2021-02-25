import React, { Component } from 'react';
import './App.scss';
import Homepage from './Homepage';
import HomepageMobile from './HomepageMobile';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // initial state for cursor position
        xMain: 400,
        yMain: 400,
        xTrailing: 400,
        yTrailing: 400,
        // initial state of window size
        width: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = "null";
  }

  componentDidMount() {
    // window size
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    // cursor
    document.addEventListener("mousemove", this.onMouseMove);
    this.moveCursor();
  }
  componentWillUnmount() {
    // window size
    window.removeEventListener("resize", this.updateDimensions);
    // cursor
    document.removeEventListener("mousemove", this.onMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }
  onMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({
      xMain: clientX,
      yMain: clientY,
    });
  }
  moveCursor = () => {
    const { xMain, yMain, xTrailing, yTrailing } = this.state;
    const xDiff = xMain - xTrailing;
    const yDiff = yMain - yTrailing;
    // number in expression is coefficient of delay
    this.setState({
      xTrailing: xTrailing + xDiff / 6,
      yTrailing: yTrailing + yDiff / 6,
    },
    () => {
      // using refs and transform for better performance
      if (this.cursor.current) {
        this.cursor.current.style.transform = `translate3d(${xMain}px, ${yMain}px, 0) translate(-50%, -50%)`;
        this.cursorTrailing.current.style.transform = `translate3d(${xTrailing}px, ${yTrailing}px, 0) translate(-50%, -50%)`;
        this.animationFrame = requestAnimationFrame(this.moveCursor);
      }
    });
  }

  // track window size and update state
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    this.setState({
      width: windowWidth,
    });
  }

  render() {
    const width = this.state.width;
    let navigation;
    let homepage;

    if (width < 780) {
      navigation = (
        <div>
          <NavigationMobile/>
        </div>
      );
      homepage = (
        <div>
          <HomepageMobile/>
        </div>
      );
    } else {
      const links = document.querySelectorAll('a, button, i');

      // cursor effect on hover over links
      links.forEach(link => {
        link.addEventListener('mouseenter', e => {
          this.cursorTrailing.current.classList.add('enlarged');
        })
        link.addEventListener('mouseout', e => {
          this.cursorTrailing.current.classList.remove('enlarged');
        })
      })

      // cursor effect on mousedown/mouseup
      window.onmousedown = () => {
        this.cursor.current.classList.add('clicked');
      }
      window.onmouseup = () => {
        this.cursor.current.classList.remove('clicked');
      }

      navigation = (
        <div>
          <Navigation/>
        </div>
      )
      homepage = (
        <div>
          <div className="cursors">
            <div className="cursor fade-in" ref={this.cursor}/>
            <div className="cursor fade-in" ref={this.cursorTrailing}/>
          </div>
          <Homepage/>
        </div>
      );
    }

    return (
      <div className="App">
          {navigation}
          {homepage}
      </div>
    )
  }
}

export default App;
