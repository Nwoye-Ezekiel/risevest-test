import React from "react";
import Section from "../Section/Section";
import "./Sections.css";
import Section1Image from "./assets/section1-image.svg";
import Section2Image from "./assets/section2-image.svg";
import Section3Image from "./assets/section3-image.svg";
import Section4Image from "./assets/section4-image.svg";

export default function Sections() {
  return (
    <div className="sections-container">
      <Section header="Invest your money in dollars" src={Section1Image}>
        By holding your investments in a stable currency, your money grows more
        over time and retains its value better.
      </Section>
      <Section
        header="Choose what's best for you"
        src={Section2Image}
        orientate={true}
      >
        Unlike other platforms, Rise lets you pick between stocks, US real
        estate and fixed income, according to your risk appetite. That way you
        can spread your risk and tap into different investments all in one
        place.
      </Section>
      <Section header="Set goals and reach them" src={Section3Image}>
        You can invest towards a goal on Rise--retirement, higher education,
        save for your home or travel budgets. Or create a goal of your own and
        invest periodically to achieve them.
      </Section>
      <Section
        header="We remember so you dont have to"
        src={Section4Image}
        orientate={true}
      >
        Our Auto-invest feature makes it easy to stay consistent, even when you
        forget. Set a funding amount, frequency and payment method and Rise will
        automatically fund your investment, on schedule.
      </Section>
    </div>
  );
}
