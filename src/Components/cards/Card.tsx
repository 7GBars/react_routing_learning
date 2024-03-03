import {Dispatch, FC, SetStateAction} from "react";

import './card.css';

export interface Card {
  id: number;
  order: number;
  title: string
}
type TCardProps = {
  cardInfo: Card;
  currentCard: Card | null;
  setCurrentCard:  Dispatch<SetStateAction<Card | null>>;
  cards: Card[],
  setCards: Dispatch<SetStateAction<Card[]>>;
}
export const Card: FC<TCardProps> = ({
      cardInfo,
      currentCard,
      setCurrentCard,
      cards,
      setCards
    }) => {

  function dragStartHandler(_e: React.DragEvent<HTMLDivElement>, card: Card) {
    console.log( 'Взяли карточку', card);
    setCurrentCard(card);

  }
  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
     console.log(e, 'Отпустили')
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('над кем сейчас перетаскиваем')
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function dragEnterHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('зашел в зону drop')
    const dropTargetCardElement = e.target as HTMLDivElement;
    dropTargetCardElement.style.background = 'lightgrey';
  }
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('вышел из зоны drop')
    const dropTargetCardElement = e.target as HTMLDivElement;
    dropTargetCardElement.style.background = 'rgba(0,0,0,0)';
  }
  function dropHandler(e:  React.DragEvent<HTMLDivElement>, card: Card) {
    e.preventDefault(); //todo зачем
    console.log('сброс', card);
    console.log('currentCard', currentCard)

    if (currentCard ) {
      setCards(cards.map(c => {
        if (c.id === card.id) {
          return {...c, order: currentCard.order}
        } else if (c.id === currentCard.id) {
          return {...c, order: card.order}
        }
        return c
      }))
    }

    const dropTargetCardElement = e.target as HTMLDivElement;

    dropTargetCardElement.style.background = 'rgba(0,0,0,0)';
  }




  return (
    <div
      className={'card'}
      id={cardInfo.id.toString()}
      draggable={true}

      onDragStart={(e) => dragStartHandler(e, cardInfo)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) =>  dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, cardInfo)}
      
      onDragEnter={(e) => dragEnterHandler(e)}

    >
      {cardInfo.title}
    </div>
  );
}

