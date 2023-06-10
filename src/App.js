import { Navigation } from "./components/Navigation";
import { PeopleSection } from "./components/peopleSection";
import { TwitchSection } from "./components/TwitchSection.jsx";
import { FaqsSection } from "./components/FaqsSection.jsx";
import { NewsSection } from "./components/NewsSection.jsx";
import '../src/index.css'

const App = () => {
  return (
    <div>
      <Navigation />
      <PeopleSection />
      <TwitchSection />
      <FaqsSection />
      <NewsSection />
    </div>
  );
};

export default App;
