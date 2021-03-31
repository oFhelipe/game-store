import LancamentosBox from '../../components/LancamentosBox';
import Footer from '../../components/Footer';
import './styles.scss'

import Menu from '../../components/Menu';

function Home () {
  return (
    <div id="home-container" className="app-container">
      <Menu />
      <LancamentosBox />
      <Footer />
    </div>
  );
}

export default Home;