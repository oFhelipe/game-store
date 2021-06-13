import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import './styles.scss'
import JogoItemCarrinho from '../../components/JogoItemCarrinho'
import api from '../../services/api'
import Menu from '../../components/Menu'
import { AiFillCreditCard } from 'react-icons/ai'
import { RiBillFill } from 'react-icons/ri'
import Pix  from '../../assets/icons/Pix.js'


function Carrinho () {
  const [metodoPagamento,settMetodoPagamento] = useState("");
  const [ games , setGames ] = useState([]);
  const [ total , setTotal ] = useState(0);

  function handleOnClickDelete (gameId) {
    const carrinhoString = localStorage.getItem('carrinho') || '[]'
    const carrinho = JSON.parse(carrinhoString)
    
    
    const gameIndex = carrinho.indexOf(gameId)

    if (gameIndex === -1) {
      return
    }

    carrinho.splice(gameIndex,1)
    const newCarrinhoString = JSON.stringify(carrinho)
    localStorage.setItem('carrinho',newCarrinhoString)
    
    const newGames = [...games]
    newGames.splice(gameIndex, 1);
    setGames(newGames)

  }

  async function handleOnClickFinalizarCompra () {
    const userString = localStorage.getItem('user')

    const {user} = JSON.parse(userString)
    await api.post('/game/order',{
      user,
      games,
      total
    })
  }

  useEffect(() => {
    async function init() {
      const carrinhoString = localStorage.getItem('carrinho') || '[]'
      const carrinho = JSON.parse(carrinhoString)

      const theGames = []

      for (const id of carrinho) {
        let game = await api.get(`/game/${id}`)
        theGames.push(game.data)
      }

      setGames(theGames)

      
    }
    init()
    
  },[])

  useEffect(() => {
    if (games.length > 0) {
      const theTotal = games.reduce((accumulator, currentValue) => {
        return accumulator + parseFloat(currentValue.price - (currentValue.price * currentValue.discount))
      }, 0)
      setTotal(theTotal)
    }
    else {
      setTotal(0)
    }
  },[games])

  return (
    <div id="carrinho-container" className="app-container">
      <Menu />
      <h2>Carrinho</h2>
      <hr/>
      <div id="carrinho-itens-container">
        {
          games.map((game) => {
            return <JogoItemCarrinho onClickDelete={handleOnClickDelete} game={game} key={game.id}/>
          })
        }
      </div>
      <div id="total-box">
      <div id="metodo-pagamento-container">
            <button onClick={()=>{settMetodoPagamento('cartão')}} className={`metodo-pagamento ${metodoPagamento === 'cartão' && 'pagamento-ativo'}`}>
              <AiFillCreditCard />
              <p>Cartão</p>
            </button>
            <button onClick={()=>{settMetodoPagamento('boleto')}} className={`metodo-pagamento ${metodoPagamento === 'boleto' && 'pagamento-ativo'}`}>
              <RiBillFill />
              <p>Boleto</p>
            </button>
            <button onClick={()=>{settMetodoPagamento('pix')}} className={`metodo-pagamento ${metodoPagamento === 'pix' && 'pagamento-ativo'}`}>
            <Pix />
              <p>Pix</p>
            </button>
          </div>
        <div id="total-container">
          <div id="total-info">
            <p>Valor total:</p>
            <p>R${(`${total.toFixed(2)}`).replace('.', ',')}</p>
          </div>
          <Button disabled={games.length === 0} onClick={handleOnClickFinalizarCompra}>Finalizar compra</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Carrinho;