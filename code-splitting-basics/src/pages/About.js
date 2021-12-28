import React,  { lazy, Suspense, useState } from 'react';

// import One from '../components/about/One';
// import Three from '../components/about/Three';
// import Two from '../components/about/Two';

const One = lazy(() => import('../components/about/One'));
const Two = lazy(() => import('../components/about/Two'));
const Three = lazy(() => import('../components/about/Three'));

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>About</h1>
      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <One />
          <Two/>
          <Three />
        </Suspense>
      )}
      <button onClick={() =>setShow(!show)}>Show</button>
    </div>
  )
}

export default About;
