import Card from './Card';

const CardList = ({ cards }) => {
  return <ul className="group/list">
    {cards.map(card => <li key={card.id} className="mb-12">
      <Card item={card} />
    </li>)}
  </ul>
}

export default CardList