import Card from "../card/card.component";
import "./card-list.styles.scss"

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id}/>
      ))}
    </div>
  );
};

export default CardList;
