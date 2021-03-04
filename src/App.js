import React, { Component } from 'react';
import './App.scss';
import background_ink from './images/background_ink.mp4';
import background_ink_LOW from './images/background_ink_LOW.mp4';
import { 
  Navigation, NavigationMobile, 
  Hello, HelloMobile,
  Homepage, HomepageMobile, 
  About, AboutMobile,
  Projects, ProjectsMobile } from './components';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // initial state of window size
        width: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    // window size
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    // window size
    window.removeEventListener("resize", this.updateDimensions);
  }

  // track window size and update state
  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    this.setState({
      width: windowWidth,
    });
  }

  render() {
    // enable scroll effects
    window.addEventListener("scroll", () => {
      document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    }, false);
    const width = this.state.width;
    let background, navigation, hello, homepage, about, projects;

    if (width < 780) {
      background = background_ink_LOW;
      navigation = <div><NavigationMobile/></div>;
      hello = <div><HelloMobile/></div>
      homepage = <div><HomepageMobile/></div>;
      about = <div><AboutMobile/></div>
      projects = <div><ProjectsMobile/></div>
    } else {
      background = background_ink;
      navigation = <div><Navigation/></div>;
      hello = <div><Hello/></div>
      homepage = <div><Homepage/></div>;
      about = <div><About/></div>
      projects = <div><Projects/></div>
    }

    return (
      <div className="App">
          <video id="bkgdVideo" autoPlay playsInline loop muted>
            <source src={background} type="video/mp4" />
          </video>
          {navigation}
          {hello}
          {homepage}
          {about}
          {projects}
      </div>
    )
  }
}

export default App;
