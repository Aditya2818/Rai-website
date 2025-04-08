import React, { useRef } from 'react';
import './App.css'
import Section1 from "./sections/Section1/Section1"
import Section2 from './sections/Section2/Section2'
import Section3 from './sections/Section3/Section3'
import Section4 from './sections/Section4/Section4'
import Section5 from './sections/Section5/Section5'
import Section6 from './sections/Section6/Section6'
import Section7 from './sections/Section7/Section7'
import Section8 from './sections/Section8/Section8'

function App() {

  const section4Ref = useRef(null);
  const section3Ref = useRef(null);
  const section6Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
 

  return (
    <>
      <Section1 
      onNavigate={{
        toSection4: () => scrollToSection(section4Ref),
        toSection3: () => scrollToSection(section3Ref),
        toSection6: () => scrollToSection(section6Ref),
      }}
      />
      <Section2
      onNavigate={{
        toSection4: () => scrollToSection(section4Ref),
      }}
      />
      <Section3 
      onNavigate={{
        toSection6: () => scrollToSection(section6Ref)
      }}
      ref={section3Ref}
      />
      <Section4
       onNavigate={{
        toSection6: () => scrollToSection(section6Ref)
      }}
      ref={section4Ref}
      />
      <Section5/>
      <Section6 ref={section6Ref}/>
      <Section7/>
      <Section8
       onNavigate={{
        toSection4: () => scrollToSection(section4Ref),
        toSection3: () => scrollToSection(section3Ref),
        toSection6: () => scrollToSection(section6Ref),
      }}
      />
    </>
  )
}

export default App
