import "./App.css";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
