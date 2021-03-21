import LancamentosBox from '../../components/LancamentosBox'
import Footer from '../../components/Footer'
import './styles.scss'

function Home () {
  return (
    <div id="home-container" className="app-container">
      <LancamentosBox />
      <Footer />
    </div>
  );
}

export default Home;