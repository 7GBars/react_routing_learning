import {FC} from "react";

import './card.css';
export interface Card {
  id: number;
  order: number;
  title: string
}
export const Card: FC<{cardInfo: Card}> = ({cardInfo}) =>  {




  function dragStartHandler(_e: React.DragEvent<HTMLDivElement>, card: Card) {
    console.log( 'Взяли карточку', card);

  }
  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
     console.log(e, 'Отпустили')
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log('над кем сейчас перетаскиваем')
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    const dropTargetCardElement = e.target as HTMLDivElement;

    dropTargetCardElement.style.background = 'rgba(0,0,0,0)';
  }
  function dropHandler(e:  React.DragEvent<HTMLDivElement>, card: Card) {
    console.log('e', card)

  }

  function dragEnterHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const dropTargetCardElement = e.target as HTMLDivElement;
    const elementId = dropTargetCardElement.getAttribute('id');
    dropTargetCardElement.style.background = 'lightgrey';

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

