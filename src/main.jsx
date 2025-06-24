import { useState, useEffect } from 'react';
import { Logo } from './components/Header/Logo';
import { Content } from './components/Cards/Content';
import { Pagination } from './components/Pagination/Pagination';
import { Popup } from './components/Popup/Popup';



export function Main() {
  const [pageNumber, setPageNumber] = useState(1)
  const [items, setItems] = useState({info: null, results: null})
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const closePupup = () => {
    setSelectedCard(null)
  }

  const { info, results } = items


  const api = `${process.env.REACT_APP_TARGET}/character/?page=${pageNumber}` 

  useEffect(() => {
    try{
        fetch(api)
        .then(res => res.json())
        .then(json => setItems(json))
      
    }catch(err) {}
    
  }, [api])

    return <>
    <Logo />    
    <Content 
        results = {results}
        handleCardClick={handleCardClick}/>
    {selectedCard && <Popup closePopup={closePupup} selectedCard={selectedCard} />}
    <Pagination 
        info = {info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}/>
    </>
}