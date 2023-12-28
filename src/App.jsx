import Extension from "./components/Extension";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Features/>
        <Extension/>
        <FAQs/>
      </main>
    </>
  );
}

export default App;
