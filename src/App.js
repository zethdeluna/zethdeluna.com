import React, { Component, useState, useEffect, createContext, useContext } from 'react';
import './App.scss';
import { 
  Navigation, NavigationMobile, 
  Hello, HelloMobile,
  Homepage, HomepageMobile, 
  About, AboutMobile,
  Projects, ProjectsMobile,
  Contact, ContactMobile
} from './components';

const viewportContext = createContext({});

const ViewportProvider = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

// Desktop version of website
const Desktop = () => {
  return (
    <>
      <Navigation/>
      <Hello/>
      <Homepage/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

// Mobile version of website
const Mobile = () => {
  return (
    <>
      <NavigationMobile/>
      <HelloMobile/>
      <HomepageMobile/>
      <AboutMobile/>
      <ProjectsMobile/>
      <ContactMobile/>
    </>
  )
}

// Choose what to display based on viewport width
const Webpage = () => {
  const { width } = useViewport();
  const breakpoint = 780;

  return width < breakpoint ? Mobile() : Desktop();
}

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Webpage/>
      </ViewportProvider>
    </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         // initial state of window size
//         width: 0,
//     };
//     this.updateDimensions = this.updateDimensions.bind(this);
//   }

//   componentDidMount() {
//     // window size
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions);
//   }
//   componentWillUnmount() {
//     // window size
//     window.removeEventListener("resize", this.updateDimensions);
//   }

//   // track window size and update state
//   updateDimensions() {
//     let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
//     this.setState({
//       width: windowWidth,
//     });
//   }

//   render() {
//     const width = this.state.width;
//     let navigation, hello, homepage, about, projects, contact;

//     if (width < 780) {
//       navigation = <NavigationMobile/>;
//       hello =<HelloMobile/>;
//       homepage = <HomepageMobile/>;
//       about = <AboutMobile/>;
//       projects = <ProjectsMobile/>;
//       contact = <ContactMobile/>;
//     } else {
//       navigation = <Navigation/>;
//       hello = <Hello/>;
//       homepage = <Homepage/>;
//       about = <About/>;
//       projects = <Projects/>;
//       contact = <Contact/>;
//     }

//     return (
//       <div className="App">
//           {navigation}
//           {hello}
//           {homepage}
//           {about}
//           {projects}
//           {contact}
//       </div>
//     )
//   }
// }

export default App;
