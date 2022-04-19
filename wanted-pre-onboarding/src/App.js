import './App.css';
import Toggle from './components/Tab';
import Tab from './components/Toggle';
import Slider from './components/Slider';
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";



function App() {
  return (
      <>
          <Toggle/>
          <br/>
          <Tab />
          <br />
          <Slider />
          <br />
          <Input/>
          <br />
          <Dropdown/>
      </>
  );
}

export default App;
