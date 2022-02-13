import React from "react";
import CustomerCard from "./CustomerCard/CustomerCard";
import "./Customers.css";
import Woman from "./assets/jade.png";
import Man from "./assets/raye.png";

export default function Customers() {
  return (
    <div className="customers-container">
      <h1>From The People Who Use Rise</h1>
      <p>
        Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.
      </p>
      <div className="customers-card-container">
        <CustomerCard name="Lade" src={Woman}>
          I don’t want to invest in separate stocks because I’m not a financial
          expert and I would rather trust my money in the hands of people like
          Rise who are skilled and knowledgeable.
        </CustomerCard>
        <CustomerCard name="Jesse" src={Woman}>
          I don’t want to invest in separate stocks because I’m not a financial
          expert and I would rather trust my money in the hands of people like
          Rise who are skilled and knowledgeable.
        </CustomerCard>
        <CustomerCard name="Raye" src={Man}>
          I chose Rise because of its leadership, wealth of knowledge and the
          people who support them. I invest with Rise in order to protect my
          savings and investment from being depleted by devaluation and
          inflation that’s at an all-time high in Nigeria.
        </CustomerCard>
      </div>
    </div>
  );
}
