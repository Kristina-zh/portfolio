import Card from './Card';

interface ICard {
  id: string
  title: string
  description: string
  skills: Array<string>
}

interface CardListProps {
  cards: ICard[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return <ul className="group/list">
    {cards.map(card => <li key={card.id} className="mb-12">
      <Card item={card} />
    </li>)}
  </ul>
}

export default CardList