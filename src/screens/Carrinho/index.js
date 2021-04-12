import { useState } from 'react'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import './styles.scss'
import JogoItemCarrinho from '../../components/JogoItemCarrinho'

import Menu from '../../components/Menu'
import { AiFillCreditCard } from 'react-icons/ai'
import { RiBillFill } from 'react-icons/ri'
import Pix  from '../../assets/icons/Pix.js'


function Carrinho () {
  const [ metodoPagamento, settMetodoPagamento ] = useState("");
  return (
    <div id="carrinho-container" className="app-container">
      <Menu />
      <h2>Carrinho</h2>
      <hr/>
      <div id="carrinho-itens-container">
        <JogoItemCarrinho />
        <JogoItemCarrinho />
        <JogoItemCarrinho />
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
            <p>R$450,00</p>
          </div>
          <Button>Finalizar compra</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Carrinho;