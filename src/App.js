import React, { Component } from 'react';
import './App.scss';
import { 
  Navigation, NavigationMobile, 
  Hello, HelloMobile,
  Homepage, HomepageMobile, 
  About, AboutMobile,
  Projects, ProjectsMobile,
  Contact, ContactMobile
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
      navigation = <NavigationMobile/>;
      hello =<HelloMobile/>;
      homepage = <HomepageMobile/>;
      about = <AboutMobile/>;
      projects = <ProjectsMobile/>;
      contact = <ContactMobile/>;
    } else {
      navigation = <Navigation/>;
      hello = <Hello/>;
      homepage = <Homepage/>;
      about = <About/>;
      projects = <Projects/>;
      contact = <Contact/>;
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
