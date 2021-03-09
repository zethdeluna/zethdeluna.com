import React, { Component } from 'react';
import './App.scss';
import { 
  Navigation, NavigationMobile, 
  Hello, HelloMobile,
  Homepage, HomepageMobile, 
  About, AboutMobile,
  Projects, ProjectsMobile,
  Contact 
} from './components';


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
    const width = this.state.width;
    let navigation, hello, homepage, about, projects, contact;

    if (width < 780) {
      navigation = <div><NavigationMobile/></div>;
      hello = <div><HelloMobile/></div>;
      homepage = <div><HomepageMobile/></div>;
      about = <div><AboutMobile/></div>;
      projects = <div><ProjectsMobile/></div>;
      contact = <div></div>;
    } else {
      navigation = <div><Navigation/></div>;
      hello = <div><Hello/></div>;
      homepage = <div><Homepage/></div>;
      about = <div><About/></div>;
      projects = <div><Projects/></div>;
      contact = <div><Contact/></div>
    }

    return (
      <div className="App">
          {navigation}
          {hello}
          {homepage}
          {about}
          {projects}
          {contact}
      </div>
    )
  }
}

export default App;
