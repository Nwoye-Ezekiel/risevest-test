import React from "react";
import AssetCard from "../AssetCard/AssetCard";
import BlueCircle from "./assets/blue-circle.svg";
import PurpleCircle from "./assets/purple-circle.svg";
import PitchCircle from "./assets/pitch-circle.svg";
import "./AssetClasses.css";

export default function AssetClasses() {
  return (
    <div className="asset-classes-container">
      <div className="assets-classes-header">
        <h2>Asset Classes</h2>
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className="assets-container">
        <AssetCard
          title="Stocks"
          returns="14% per annum"
          riskLevel="Medium"
          src={PitchCircle}
          color="#FFF4F0"
        >
          We help you invest and manage your money by investing in our portfolio
          of 30 high-growth stocks across the US market with our equity
          portfolio of power stocks.
        </AssetCard>
        <AssetCard
          title="Real Estate"
          returns="14% per annum"
          riskLevel="Medium"
          src={PurpleCircle}
          color="#F6F2FF"
        >
          Our Real Estate plan is the sweet middle. Best for those who want a
          balance of good returns and medium risk. This plan invests in rented
          buildings in the US.
        </AssetCard>
        <AssetCard
          title="Fixed Income"
          returns="14% per annum"
          riskLevel="Medium"
          src={BlueCircle}
          color="#ECFEFE"
        >
          A low-risk asset perfect for anyone who wants to protect their money
          in a secure, appreciating currency, i.e. the dollar. For people who
          want to protect their hard-earned money from inflation while earning
          steady returns.
        </AssetCard>
      </div>
    </div>
  );
}
