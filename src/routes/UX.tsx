import {useState} from "react";

export function UX() {
  const [cards, setCards] = useState([
    {id: 1, order: 1, title: 'Карточка 1'},
    {id: 2, order: 2, title: 'Карточка 2'},
    {id: 2, order: 2, title: 'Карточка 2'},
  ]);

  return (
    <div>
      {cards.map(c => <div>{c.title}</div>)}
      <button onClick={() => setCards(cards)}>Перемешать</button>
    </div>
  );
}

