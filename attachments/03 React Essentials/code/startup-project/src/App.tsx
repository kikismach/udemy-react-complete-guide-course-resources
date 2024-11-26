import "./style.css";
import { CORE_CONCEPTS } from "./data/concepts";
import Header from "./components/Header/Header";
import TabExample from "./components/TabExample/TabExample";
import CoreConcept from "./components/CoreConcept/CoreConcept";

export default function App() {

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <CoreConcept />
        </section>
        <TabExample />
      </main>
    </div>
  );
}
