import "./App.css";
import AssetClasses from "./components/AssetClasses/AssetClasses";
import Community from "./components/Community/Community";
import CTA from "./components/CTA/CTA";
import Customers from "./components/Customers/Customers";
import Future from "./components/Future/Future";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Regulation from "./components/Regulation/Regulation";
import Sections from "./components/Sections/Sections";
import SupportedBy from "./components/SupportedBy/SupportedBy";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <SupportedBy />
        <Sections />
        <AssetClasses />
        <Future />
        <Regulation />
        <Customers />
        <Community />
        <CTA />
      </Layout>
    </div>
  );
}

export default App;
