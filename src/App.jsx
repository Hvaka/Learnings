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
    </div>
  );
}

export default App;
