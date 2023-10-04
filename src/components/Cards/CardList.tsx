import Card from './Card';

export interface ICard {
  id: string
  title: string;
  description: string;
  skills: string[];
  link?: string;
  image?: string;
  imageAlt?: string;
  period?: string;
  company?: string;
}

interface CardListProps {
  cards: ICard[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return <ul>
    {cards.map((card: ICard) => <li key={card.id} className="mb-12">
      <Card item={card} />
    </li>)}
  </ul>
}

export default CardList