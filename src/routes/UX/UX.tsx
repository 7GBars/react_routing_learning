import {useState} from "react";
import {Card} from "../../Components/cards/Card.tsx";

import './ux.scss';

export function UX() {
  const [cards, setCards] = useState<Card[]>([
    {id: 1, order: 1, title: 'Карточка 1'},
    {id: 2, order: 2, title: 'Карточка 2'},
    {id: 3, order: 3, title: 'Карточка 3'},
    {id: 4, order: 4, title: 'Карточка 4'},
  ]);


  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const sortCard = (a: Card, b: Card) => a.order > b.order ? 1 : -1
  return (
    <div className={'UX--centered'}>
      {cards.sort(sortCard).map(c => <Card
          key={c.id}
          cardInfo={c}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
          cards={cards}
          setCards={setCards}
      />)
      }
      <button onClick={() => setCards(cards)}>Перемешать</button>
    </div>
  );
}

