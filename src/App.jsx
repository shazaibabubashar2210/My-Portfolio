import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter basename="/My-Portfolio">
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Suspense fallback={<div className='min-h-[200px]' />}>
            <Contact />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
