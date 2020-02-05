import React from "react";
import Card from "../components/Card";

const CardList = props => {
  const { robots } = props;
  return (
    <div className="tc">
      {robots.map((user, index) => {
        return (
          <Card
            key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
