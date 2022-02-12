import "./App.css";
import { CardGrid } from "./components/CardGrid";
import { Header } from "./components/Header";
import { Score } from "./components/Score";

function App() {
  return (
    <div>
      <Header />
      <Score />
      <CardGrid />
    </div>
  );
}

export default App;
