import Footer from '../../components/Footer'
import './styles.scss'
import JogoItem from '../../components/JogoItem'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Pesquisa () {
  const query = useQuery();

  const [ jogo, setJogo ] = useState(query.get("jogo") || undefined)

  return (
    <div id="pesquisa-container" className="app-container">
        <h1>{ jogo ? jogo : 'Pesquise um jogo' }</h1>
      <div className="jogos-component">
        <JogoItem />
      </div>
      <Footer />
    </div>
  );
}

export default Pesquisa;