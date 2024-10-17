import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

 

const App: React.FC = () => {
  return (
    <div>
 
      <Greeting name="Amine" />
      <Counter inc={2}/>
      </div>)};

export default App;
