import React, { useState, useEffect, createContext, useContext } from 'react';
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

export default App;
