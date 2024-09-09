import React from 'react';
import Banniere from '../Components/banniere.jsx';
import Navigation from '../Components/nav.jsx';
import Flexbox from '../Components/flexbox.jsx';
import Footer from '../Components/footer.jsx';
import Logo from '../Components/logo.jsx';
import background from '../images/fond1.png';

const Accueil = () => {
  return (
    <div className="Index">
      <main className="main">
        <header>
          <Logo />
          <Navigation />
        </header>
        <Banniere text="Chez vous, partout et ailleurs" image={background} />
        <Flexbox />
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
