import {useState} from "react";
import {Card} from "../../Components/cards/Card.tsx";

import './ux.scss';
import {DragTest} from "../../Components/rdagTest/dragTest.tsx";
export function UX() {
  const [cards, setCards] = useState<Card[]>([
    {id: 1, order: 1, title: 'Карточка 1'},
    {id: 2, order: 2, title: 'Карточка 2'},
    {id: 3, order: 3, title: 'Карточка 3'},
    {id: 4, order: 4, title: 'Карточка 4'},
  ]);

  return (
    <div className={'UX--centered'}>
      {cards.map(c => <Card cardInfo={c} key={c.id}/>)}
      <button onClick={() => setCards(cards)}>Перемешать</button>
      <DragTest/>
    </div>
  );
}

