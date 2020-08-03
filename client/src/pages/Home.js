import React from 'react';

// Components
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

import background from '../images/pexels-luis-gomes-546819.jpg';
function Home(props) {
  const { pathname } = props.location;
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
    >
      <NavBar location={pathname} color={'transparent'} />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
