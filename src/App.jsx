import './App.css';
import FirstComp from './propsContainer/FirstComp';
import FourthComp from './propsContainer/FourthComp';
import SecondComp from './propsContainer/SecondComp';
import ThirdComp from './propsContainer/ThirdComp';
import DestructuringCon from './propsContainer/DestructuringCon';
import StateMgm from './StateMgm';
import { useState } from 'react';
import ClickEvent from './ClickEvent';
import Chat from './Chat';
import FormsEvents from './FormsEvents';
import SampleArray from './SampleArray';
import SampleArray1 from './SampleArray1';
import SampleArray2 from './SampleArray2';
import TempLit from './TempLit';


function App() {
const [sampleCondition, setSampleCondition] = useState(false);

const user = {
  name: "Harsha",
  age: 28,
  email: "harsha@example.com",
  address: "123 Main St, Cityville"
};

const myCar = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue"
};

  return (
    <div>
      <FormsEvents />
      <SampleArray />
      <SampleArray1 />
      <SampleArray2 />
      <TempLit />
    </div>
  );
}

export default App;
