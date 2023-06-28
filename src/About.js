import React, { useContext } from 'react'
import HeroSection from './Components/HeroSection'
import { useProductContext } from './Context/productContext';

const About = () => {

  const {myName} = useProductContext();

  const data = {name: "E-commerce Online Store"};

  return (
    <>
      {myName}
      <HeroSection myData={data}/>{" "}
    </>
  );
}

export default About;