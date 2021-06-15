import { useState, useEffect } from 'react'
import './styles.scss'
import Button from '../Button'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

function LancamentosBox () {
  const history = useHistory()
  const [indice, setIndice] = useState(0)
  const [lancamentos, setLancamentos] = useState([])

  useEffect(()=>{
    async function onInit(){
      const theLancamentos = await api.get('/game/lancamentos');
      setLancamentos(theLancamentos.data);
    }
    onInit()
  },[])


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

  function goToDescPage () {
    history.push(`/descricao/${lancamentos[indice].id}`)
    window.scrollTo(0, 0)
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
