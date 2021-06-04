import { useEffect, useState } from 'react';
import './styles.scss'

function Paginacao({onClickPrev, onClickNext, onClickPage, count, limit, page}) {

    const [pagesArray, setPagesArray] = useState([])

    function renderPagesArray() {
        let pages = []
       for (let index = 0; index < count/limit; index++) {
           pages.push(index + 1);
       } 
       setPagesArray(pages)
    }

    useEffect(()=>{
        renderPagesArray()
    },[count, limit, page])

  return (
      <div className="paginacao-container">
          {page > 1 && <div onClick={onClickPrev} className="pagination-button prev-next-button">{'<'}</div>}
          {pagesArray.map((index)=> <div onClick={onClickNext} onClick={()=>{onClickPage(index)}} className={`pagination-button ${index === page ? 'page-button-active' : 'page-button-inactive'}`}>{index}</div>)}
          {page < count/limit && <div onClick={onClickNext} className="pagination-button prev-next-button">{'>'}</div>}
      </div>
  );
}

export default Paginacao;