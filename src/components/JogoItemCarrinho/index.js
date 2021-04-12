import { BsTrash } from "react-icons/bs";
import './styles.scss'

function JogoItemCarrinho () {
  return (
    <div className="jogo-item-carrinho-box">
      <img src="https://i.pinimg.com/736x/46/9e/3b/469e3b46d476c3125cb81c978e81492f.jpg" alt="capa"/>
      <div className="jogo-item-carrinho-personagem-fundo">
      <img className="fundo" src="https://i.pinimg.com/originals/f6/b7/ae/f6b7aeeca193bad95d735127cfc0e6a2.jpg" alt="fundo"/>
      <img className="personagem" alt="personagem" src="https://1.bp.blogspot.com/-QPZv37t7qUg/WNqoxYYpDzI/AAAAAAAAM5w/5chwbjYfiaQbYgzDOwYN1z0zVy9FAT78ACEw/s1600/horizon-zero-dawn-two-column-aloy-03-ps4-eu-22jun16.png"/>
      </div>
      <div className="jogo-item-carrinho-info-container">
        <div className="nome-desenvolvedora">
          <h4>Horizon Zero Down</h4>
          <p>FromSoftware</p>
        </div>
        <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur id dui eget semper. Cras vestibulum libero nec felis efficitur malesuada. Nulla nisl neque, tincidunt et dolor eu, vulputate feugiat sapien. In porttitor nisi nec mauris dapibus, quis eleifend lorem dapibus. Fusce ac elementum quam. Nulla fermentum nisl mauris, id iaculis ligula vestibulum a. Ut ex risus, elementum sit amet consectetur ac, molestie ac odio. Maecenas efficitur elit risus, ut efficitur massa congue eu. Mauris sit amet dui in nibh accumsan congue. Suspendisse eget vestibulum ex Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur id dui eget semper. Cras vestibulum libero nec felis efficitur malesuada. Nulla nisl neque, tincidunt et dolor eu, vulputate feugiat sapien. In porttitor nisi nec mauris dapibus, quis eleifend lorem dapibus. Fusce ac elementum quam. Nulla fermentum nisl mauris, id iaculis ligula vestibulum a. Ut ex risus, elementum sit amet consectetur ac, molestie ac odio. Maecenas efficitur elit risus, ut efficitur massa congue eu. Mauris sit amet dui in nibh accumsan congue. Suspendisse eget vestibulum ex</p>
        <div className="preco-desconto">
          <div className="valores">
            <h4>R$200,00</h4>
            <h4>R$150,00</h4>
          </div>
          <div className="desconto">
            <p>-25%</p>
          </div>
        </div>
      </div>
      <div className="trash-box">
        <BsTrash />
      </div>
    </div>
  );
}

export default JogoItemCarrinho;