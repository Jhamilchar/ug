import { Navigation } from "./components/Navigation";
import { PeopleSection } from "./components/peopleSection";
import { TwitchSection } from "./components/TwitchSection.jsx";
import '../src/index.css'

const App = () => {
  return (
    <div>
      <Navigation />
      <PeopleSection />
      <TwitchSection />
    </div>
  );
};

export default App;
