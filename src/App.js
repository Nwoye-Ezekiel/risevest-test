import "./App.css";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Sections />
      </Layout>
    </div>
  );
}

export default App;
