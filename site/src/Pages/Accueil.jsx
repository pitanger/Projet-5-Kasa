import Banniere from '../Components/banniere.jsx';
import Navigation from '../Components/nav.jsx';
import Flexbox from '../Components/flexbox.jsx';
import Footer from '../Components/footer.jsx';
import Logo from '../Components/logo.jsx';

const Accueil = () => {
  return (
    <div className="Index">
      <main>
        <header className="Accueil-header">
          <Logo />
          <Navigation />
        </header>
        <Banniere />
        <Flexbox />
      </main>
      <Footer />
    </div>
  );
}
export default Accueil;
