import Footer from '../../components/Footer'
import Button from '../../components/Button'
import './styles.scss'
import JogoItemCarrinho from '../../components/JogoItemCarrinho'

function Carrinho () {
  return (
    <div id="carrinho-container" className="app-container">
      <h2>Carrinho</h2>
      <hr/>
      <div id="carrinho-itens-container">
        <JogoItemCarrinho />
        <JogoItemCarrinho />
        <JogoItemCarrinho />
      </div>
      <div id="total-box">
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