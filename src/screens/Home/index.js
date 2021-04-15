import LancamentosBox from '../../components/LancamentosBox'
import Footer from '../../components/Footer'
import './styles.scss'
import JogoItem from '../../components/JogoItem'
import Menu from "../../components/Menu"

function Home () {
  return (
    <div id="home-container" className="app-container">
      <Menu />
      <LancamentosBox />
      <div className="jogos-component">
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
        <JogoItem />
      </div>
      <Footer />
    </div>
  );
}

export default Home;