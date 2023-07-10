import React from "react";
import SectionTitle from "../components/SectionTitle";
import PlansContainer from "../components/PlansContainer";
import PlanItem from "../components/PlanItem";
import "./App.css";

const planInfo = [
  {
    id: 1,
    image: "/icons/starter_icn.svg",
    title: "Starter",
    price: 5,
    description: [
      {
        id: 1,
        text: "5 Pages And Blocks",
      },
      {
        id: 2,
        text: "Limited Template Library",
      },
      {
        id: 3,
        text: "Email Support",
      },
      {
        id: 4,
        text: "Basic Hosting",
      },
    ],
  },
  {
    id: 2,
    className: "pro-plan__icon",
    image: "/icons/pro_icn.svg",
    title: "pro",
    price: 28,
    description: [
      {
        id: 1,
        text: "20 Pages And Blocks",
      },
      {
        id: 2,
        text: "Unlimited Template Library",
      },
      {
        id: 3,
        text: "Phone + Email Support",
      },
      {
        id: 4,
        text: "Dedicated Hosting",
      },
    ],
  },
  {
    id: 3,
    image: "/icons/enterprise_icn.svg",
    title: "Enterprise",
    price: 49,
    description: [
      {
        id: 1,
        text: "Unlimited Pages And Blocks",
      },
      {
        id: 2,
        text: "Unlimited Template Library",
      },
      {
        id: 3,
        text: "Dedicated Support",
      },
      {
        id: 4,
        text: "Advanced Hosting",
      },
    ],
  },
];

const App = () => {
  return (
    <>
      <SectionTitle title="Pricing Option" />;
      <PlansContainer>
        {planInfo.map((plan) => (
          <PlanItem
            key={plan.id}
            image={plan.image}
            className={plan.className}
            planTitle={plan.title}
            price={plan.price}
            description={plan.description}
          />
        ))}
      </PlansContainer>
    </>
  );
};

export default App;
