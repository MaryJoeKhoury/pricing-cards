import React from "react";
import PlanCard from "./PlanCard";
import Button from "./Button";

const PlanItem = (props) => {
  return (
    <PlanCard>
      <img src={props.image} className={props.className || "plan__icon"} />
      <div className="plan__desc">
        <h1 className="plan__title">{props.planTitle}</h1>
        <h2 className="plan__price">{props.price}</h2>
        <ul className="plan__features">
          {props.description.map((items) => (
            <li key={items.id}>{items.text}</li>
          ))}
        </ul>
      </div>
      <Button text="Buy Now"></Button>
    </PlanCard>
  );
};

export default PlanItem;
