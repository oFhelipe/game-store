import { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import './styles.scss';

// icon
import { IoPricetags } from 'react-icons/io5';
import { VscTag } from 'react-icons/vsc';
import { BiSearchAlt2 } from 'react-icons/bi';
import { HiChevronDown, HiMenuAlt2, HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaGamepad, FaUserAstronaut, FaShoppingCart, FaPlaystation, FaXbox } from 'react-icons/fa';
import IconShop from "../../assets/icons/IconShop";
import IconPlatform from "../../assets/icons/IconPlatform";
import IconMobile from "../../assets/icons/IconMobile";


function openMenu(e) {
  let backgroud = document.querySelector(".menu--backgroud");
  let drawerMenu = document.querySelector(".menu--drawer");
  backgroud.classList.remove("bw0");
  backgroud.classList.add("bw100");
  drawerMenu.classList.remove("dw0");
  drawerMenu.classList.add("dw75");
};

function closeMenu(e) {
  let backgroud = document.querySelector(".menu--backgroud");
  let drawerMenu = document.querySelector(".menu--drawer");
  if(e.target !== backgroud) return;
  backgroud.classList.remove("bw100");
  backgroud.classList.add("bw0");
  drawerMenu.classList.remove("dw75");
  drawerMenu.classList.add("dw0");
};

function checkClass(className) {
  return className === "displayHeight";
}

function openCloseItemMenu(e) {
  let itensMenu = document.getElementsByClassName("menuItem");

  Array.from(itensMenu).map((itemMenu) => {

    let x = itemMenu.firstChild.className;
    let y = e.currentTarget.className;

    if(x === y) {
      const arrayClass = Array.from(itemMenu.children[1].classList);
      const arrayElements = Array.from(itemMenu.children);

      if(Boolean(arrayClass.find(checkClass))) {
        arrayElements[1].classList.remove("displayHeight");
      }
      else {
        arrayElements[1].classList.add("displayHeight");
      }
    }
  })
}

function clearStorage() {
  localStorage.clear();
  window.location.reload();
}

//sair
function logout(username) {
  return (
    <Link to="" className="content-iten menu--drawer-come-account">
      <FaUserAstronaut className="icon icon-astronaut" onClick={() => clearStorage()}/>
      <p className="menu--drawer-come-account-nameUser" onClick={() => clearStorage()}>Sair</p>
    </Link>
  )
}
//entrar
function signIn(username) {
  return (
    <Link to="/login" className="content-iten menu--drawer-come-account">
      <FaUserAstronaut className="icon icon-astronaut"/>
      <p className="menu--drawer-come-account-nameUser">Entrar</p>
    </Link>
  )
} 

function Menu() {

  const [inputText, setInputText] = useState('');

  const history = useHistory();

  function searchGameByName() {
    history.push(`${inputText ? `/pesquisa?jogo=${inputText}` : '/pesquisa'}`)
  }

  const [userLogged, setUserLogged] = useState('');

  useEffect(() => {
    if(localStorage.user) {
      setUserLogged(JSON.parse(localStorage.user).user.username);
    } 
  });

  const carrinhoString = localStorage.getItem('carrinho') || '[]';
  const carrinho = JSON.parse(carrinhoString);


  

  return(
    <div className="menu">
      <div className="menu--backgroud" onClick={closeMenu}>
        <div className="menu--drawer">
          <Link to="/" className="menu--drawer-logo">
            <IconShop />
            <p>Game-Store</p>
          </Link>

          <div className="menu--drawer-list">
            <ul className="menu--drawer-list-content">

              <li className="content-iten menu--drawer-list-content-promo menuItem">

                <div className="menu--drawer-list-content-promo-label"  onClick={openCloseItemMenu}>
                  <IoPricetags className="icon icon-tag" />
                  <p>Promoções</p>
                  <HiChevronDown className="icon-chevron"/>
                </div>
                

                <ul className="menu--drawer-list-content-promo-tag i">
                  <Link to="/pesquisa"><li><VscTag className="promo-icon"/>10%</li></Link>
                  <Link to="/pesquisa"><li><VscTag className="promo-icon"/>20%</li></Link>
                  <Link to="/pesquisa"><li><VscTag className="promo-icon"/>30%</li></Link>
                </ul>

              </li>

              <li className="content-iten menu--drawer-list-content-plat menuItem">

                <div className="menu--drawer-list-content-plat-label" onClick={openCloseItemMenu}>
                  <IconPlatform />
                  <p>Plataforma</p> 
                  <HiChevronDown className="icon-chevron"/>
                </div>

                <ul className="menu--drawer-list-content-plat-types">
                  <Link to="/pesquisa"><li><HiOutlineDesktopComputer className="plat-icon"/> PC</li></Link>
                  <Link to="/pesquisa"><li><FaPlaystation className="plat-icon"/> Playstation</li></Link>
                  <Link to="/pesquisa"><li><FaXbox className="plat-icon"/> Xbox</li></Link>
                </ul>

              </li>

              <li className="content-iten menu--drawer-list-content-genre menuItem">

                <div className="menu--drawer-list-content-genre-label" onClick={openCloseItemMenu}>
                  <FaGamepad className="icon icon-gamepad"/>
                  <p>Gênero de jogo</p> 
                  <HiChevronDown className="icon-chevron"/>
                </div>

                <ul className="menu--drawer-list-content-genres-types">
                  <li>
                    <ul>
                      <Link to="/pesquisa"><li>Aventura</li></Link>
                      <Link to="/pesquisa"><li>Ação</li></Link>
                      <Link to="/pesquisa"><li>Casual</li></Link>
                    </ul>
                  </li>
                  <hr/>
                  <li>
                    <ul>
                      <Link to="/pesquisa"><li>Corrida</li></Link>
                      <Link to="/pesquisa"><li>Esporte</li></Link>
                      <Link to="/pesquisa"><li>Estrategia</li></Link>
                    </ul>
                  </li>
                  <hr/>
                  <li>
                    <ul>
                      <Link to="/pesquisa"><li>Indie</li></Link>
                      <Link to="/pesquisa"><li>RPG</li></Link>
                      <Link to="/pesquisa"><li>Terror</li></Link>
                    </ul>
                  </li>
                </ul>

              </li>

            </ul>

            <hr/>

            <div className="menu--drawer-exception-content">
              <div className="menu--drawer-exception">
                <div className="elements-exception-content">
                  <div className="elements-exception-search">
                    <input type="text" value={inputText} onChange={(e)=>{setInputText(e.currentTarget.value)}} className="exception-inputSearch" placeholder="Buscar"/>
                    <BiSearchAlt2 className="icon icon-search" onClick={() => { searchGameByName() }}/>
                  </div>
                  <Link to="/carrinho" className="carshop">
                    <span className="carshop-number">{ carrinho.length }</span>
                    <FaShoppingCart className="icon icon-carshop"/>
                  </Link>
                </div>
              </div>
                {
                  userLogged ? logout(userLogged) : signIn(userLogged)
                }
            </div>
          </div>
          

        </div>
      </div>
      
      <div className="menu--bar-mobile">
        <div className="menu--bar-mobile-left">
          <HiMenuAlt2 className="menu--bar-mobile-icon" onClick={openMenu}/>
          <span className="menu--bar-mobile-line"></span>
          <Link to="/" className="menu--drawer-logo">
            <IconMobile />
          </Link>
        </div>

        <div className="menu--bar-mobile-right">
          <input value={inputText} onChange={(e)=>{setInputText(e.currentTarget.value)}} type="text" className="menu--bar-mobile-input" placeholder="Buscar" />
          <BiSearchAlt2 onClick={() => { searchGameByName() }} className="menu--bar-mobile-icon icon-search"/>
          <Link to="/carrinho" className="carshop">
            <span className="carshop-number">{ carrinho.length }</span>
            <FaShoppingCart className="menu--bar-mobile-icon"/>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Menu;