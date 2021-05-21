import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.scss';
import { 
  Navigation, NavigationMobile,
  Homepage, HomepageMobile,
  About, AboutMobile,
  Workflow, WorkflowMobile,
  Projects, ProjectsMobile,
  ScrollProgress,
  Thanks, ThanksMobile
} from './components';

// for viewing mobile vs desktop version
// ---------------------------------------
const viewportContext = createContext();

// for handling window resizing
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

// get current viewport dimensions
const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

// desktop version
const Desktop = () => {
  return (
    <>
      <ScrollProgress/>
      <Navigation/>
      <Homepage/>
      <About/>
      <Projects/>
      <Workflow/>
      <Thanks/>
    </>
  );
};

// mobile version
const Mobile = () => {
  return (
    <>
      <ScrollProgress/>
      <NavigationMobile/>
      <HomepageMobile/>
      <AboutMobile/>
      <ProjectsMobile/>
      <WorkflowMobile/>
      <ThanksMobile/>
    </>
  );
};

// display desktop or mobile
const Webpage = () => {
  const { width } = useViewport();
  const breakpoint = 900;

  return width < breakpoint ? Mobile() : Desktop();
};

// ---------------------------------------

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Webpage/>
      </ViewportProvider>
    </div>
  );
}

export default App;
