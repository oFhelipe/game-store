import LancamentosBox from '../../components/LancamentosBox'
import Footer from '../../components/Footer'
import './styles.scss'
import JogoItem from '../../components/JogoItem'
import Menu from "../../components/Menu"
import { useEffect, useState } from 'react'
import api from '../../services/api'

function Home () {

  const [ gamesGenderOne, setGamesGenderOne ] = useState([])
  const [ gamesGenderTwo, setGamesGenderTwo ] = useState([])
  const [ gamesGenderthree, setGamesGenderthree ] = useState([])

  useEffect(() => {
    async function init(){
      const responseAcao = await api.get('/game',{
        params: {
          gender: 'aventura',
        }
      })
      setGamesGenderOne(responseAcao.data.games)

      const responseRpg = await api.get('/game',{
        params: {
          gender: 'rpg',
        }
      })
      setGamesGenderTwo(responseRpg.data.games)
      
    }
    init()
  },[])

  return (
    <div id="home-container" className="app-container">
      <Menu />
      <LancamentosBox />
        {
        gamesGenderOne[0] && (
          <>
            <p className="jogo-gender-name">Aventura</p>
            <div className="jogos-component">
              <JogoItem game={gamesGenderOne[0]}/>
              <JogoItem game={gamesGenderOne[1]}/>
              <JogoItem game={gamesGenderOne[2]}/>
            </div>
          </>
          )
        }
        
        {
        gamesGenderTwo[1] && (
          <>
            <p className="jogo-gender-name">RPG</p>
            <div className="jogos-component">
              <JogoItem game={gamesGenderTwo[0]}/>
              <JogoItem game={gamesGenderTwo[1]}/>
              <JogoItem game={gamesGenderTwo[2]}/>
            </div>
          </>
          )
        }
      <Footer />
    </div>
  );
}

export default Home;