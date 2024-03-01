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
    document.body.style.cursor = 'move';
  }
  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
     console.log(e, 'Отпустили')
    const targetElement = e.target as HTMLElement
    targetElement.style.background = 'white';
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log('над кем сейчас перетаскиваем')
    e.dataTransfer.dropEffect = "move";
    const targetElement = e.target as HTMLElement
    targetElement.style.background = 'lightgrey';
  }
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
   console.log(e, 'Вышли за пределы другой карточки')
  }
  function dropHandler(e:  React.DragEvent<HTMLDivElement>, card: Card) {
    e.preventDefault();
    console.log('карта на которую скинули', card)

  }
  return (
    <div
      className={'card'}
      draggable={true}

      onDragStart={(e) => dragStartHandler(e, cardInfo)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) =>  dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, cardInfo)}

    >
      {cardInfo.title}
    </div>
  );
}

