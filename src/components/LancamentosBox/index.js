import { useState, useEffect } from 'react'
import './styles.scss'
import Button from '../Button'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

function LancamentosBox () {
  const history = useHistory()

<<<<<<< HEAD
  const theLancamentos = [
=======
  const history = useHistory();
  const [lancamentos, setLancamentos] = useState([])

  useEffect(()=>{
    async function onInit(){
      const theLancamentos = await api.get('/game/lancamentos');
      setLancamentos(theLancamentos.data);
    }
    onInit()
  },[])

  const lancamentos2 = [
>>>>>>> 6f70eec525601362c93d0bc74f50006a1cb45140
    {
      nome: 'Cyberpunk 2077',
      background:
        'https://www.cyberpunk.net/build/images/media/screenshots/Cyberpunk2077_Love_this_town_RGB-en-8aea899f.jpg',
      personagem:
        'https://i.pinimg.com/originals/29/66/ee/2966ee9e18daba084c145dd2897d79e0.png',
      capa:
        'https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png',
      desenvolvedora: 'Cd Projeckt',
      descricao:
        'Desc do jogo é o seguinte BUG BUG BUG BUG BUG JOGO BOM MAS COM BUG BUG BUG',
      preco: 199.0
    },
    {
      nome: 'Gta V',
      background:
        'https://i.pinimg.com/originals/bb/88/ce/bb88cec3170cf3296685814ee0738192.jpg',
      personagem: 'https://pngimg.com/uploads/gta/gta_PNG51.png',
      capa:
        'https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png',
      desenvolvedora: 'RockStar Games',
      descricao:
        'Jogo de 2015 que liderou as vendas e que jogo foda, pena que ninguem joga mais o online',
      preco: 80.0
    },
    {
      nome: 'Skyrim',
      background: 'https://wallpapercave.com/wp/wp2225897.jpg',
      personagem:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a6c08249-45b1-4852-ac3c-f5e49a7f6d25/d6woavh-0c163919-06fc-4383-a236-3697ffd27580.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTZjMDgyNDktNDViMS00ODUyLWFjM2MtZjVlNDlhN2Y2ZDI1XC9kNndvYXZoLTBjMTYzOTE5LTA2ZmMtNDM4My1hMjM2LTM2OTdmZmQyNzU4MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Qae3URpKn4u_E1_4UB9cLWRAuH3M1HurYkwwlQcfkzU',
      capa:
        'https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png',
      desenvolvedora: 'Bethesda',
      descricao:
        'Um dos melhores jogos do seculo e sobreviveu por muito tempo, melhorado com diversos mods Skyrim é o melhor jogo',
      preco: 35.0
    },
    {
      nome: 'Horizon Zero Down',
      background:
        'https://i.pinimg.com/originals/f6/b7/ae/f6b7aeeca193bad95d735127cfc0e6a2.jpg',
      personagem:
        'https://1.bp.blogspot.com/-QPZv37t7qUg/WNqoxYYpDzI/AAAAAAAAM5w/5chwbjYfiaQbYgzDOwYN1z0zVy9FAT78ACEw/s1600/horizon-zero-dawn-two-column-aloy-03-ps4-eu-22jun16.png',
      capa:
        'https://i.pinimg.com/736x/46/9e/3b/469e3b46d476c3125cb81c978e81492f.jpg',
      desenvolvedora: 'FromSoftware',
      descricao:
        'Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino. Em um mundo pós-apocalíptico exuberante, onde a natureza retomou as ruínas de uma civilização esquecida, pequenos grupos de pessoas vivem em tribos primitivas de caçadores e coletores. O domínio delas sobre esse novo ambiente selvagem foi usurpado pelas máquinas, terríveis criaturas mecânicas de origem desconhecida.Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino. Em um mundo pós-apocalíptico exuberante, onde a natureza retomou as ruínas de uma civilização esquecida, pequenos grupos de pessoas vivem em tribos primitivas de caçadores e coletores. O domínio delas sobre esse novo ambiente selvagem foi usurpado pelas máquinas, terríveis criaturas mecânicas de origem desconhecida.Em uma era na qual máquinas vagam livremente e a humanidade deixou de ser a espécie dominante, uma jovem caçadora chamada Aloy inicia uma jornada na qual desvendará o seu destino. Em um mundo pós-apocalíptico exuberante, onde a natureza retomou as ruínas de uma civilização esquecida, pequenos grupos de pessoas vivem em tribos primitivas de caçadores e coletores. O domínio delas sobre esse novo ambiente selvagem foi usurpado pelas máquinas, terríveis criaturas mecânicas de origem desconhecida.',
      preco: 100.0
    },
    {
      nome: 'Naruto Storm 4',
      background:
        'https://img3.goodfon.com/wallpaper/nbig/f/82/naruto-storm-4-ultimate-ninja.jpg',
      personagem:
        'https://i.pinimg.com/originals/9e/c6/e1/9ec6e148fd1a2a3c7a3eb6e4fbee48ba.png',
      capa: 'https://notadogame.com/uploads/game/cover/250x/5bfdc30b38086.jpg',
      desenvolvedora: 'Bandai',
      descricao:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      preco: 150.0
    }
  ]

  const [indice, setIndice] = useState(0)
  const [lancamentos, setLancamentos] = useState([])

  useEffect(() => {
    const teste = setTimeout(() => {
      setIndice(indice + 1 < lancamentos.length ? indice + 1 : 0)
    }, 3000)
    return () => clearTimeout(teste)
  }, [indice, lancamentos])

  useEffect(() => {
    async function init () {
      const lancamentos = await api.get('game/lancamentos')
      setLancamentos(lancamentos.data)
    }
    init()
  }, [])

<<<<<<< HEAD
  function goToDescPage () {
    history.push(`/descricao/${lancamentos[indice].id}`)
    window.scrollTo(0, 0)
=======
  function goToDescPage() {
    history.push(`/descricao/${lancamentos[indice].id}`);
    window.scrollTo(0, 0);
>>>>>>> 6f70eec525601362c93d0bc74f50006a1cb45140
  }

  return (
    <div id='lancamentos-box'>
      {lancamentos[indice] && (
        <>
          <div id='lancamento-info-background'>
            <img src={lancamentos[indice].background} alt='' />
            <span />
            <div id='lancamento-info-container'>
              <div>
                <h2>{lancamentos[indice].name}</h2>
                <h3>{lancamentos[indice].developer}</h3>
                <p>{lancamentos[indice].description}</p>
                <div>
                  <h4>
                    R$
                    {parseFloat(
                      lancamentos[indice].price -
                        lancamentos[indice].price * lancamentos[indice].discount
                    ).toFixed(2)}
                  </h4>
                  <Button onClick={goToDescPage}>Ver mais</Button>
                </div>
              </div>
              <img src={lancamentos[indice].character} alt='personagem' />
            </div>
          </div>
          <div id='lancamento-jogos-lista'>
            {lancamentos.map((jogo, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setIndice(index)
                  }}
                  className={`game-box ${index === indice &&
                    'current-game-box'}`}
                >
                  <div className='game-box-information'>
                    <img src={jogo.cover} alt='capa' />
                    <div>
                      <h4>{jogo.name}</h4>
                      <h4>{jogo.developer}</h4>
                      <p>R$ {parseFloat(jogo.price - (jogo.price * jogo.discount)).toFixed(2)}</p>
                    </div>
                  </div>
                  {index === indice ? (
                    <div className='status-container'>
                      <div className='status' />
                    </div>
                  ) : (
                    <div className='status-container-false' />
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default LancamentosBox
