import React,  { lazy, Suspense } from 'react';

// import One from '../components/about/One';
// import Three from '../components/about/Three';
// import Two from '../components/about/Two';

const One = lazy(() => import('../components/about/One'));
const Two = lazy(() => import('../components/about/Two'));
const Three = lazy(() => import('../components/about/Three'));

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <One />
        <Two/>
        <Three />
      </Suspense>
    </div>
  )
}

export default About;
