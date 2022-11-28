import React from 'react';
import logo from './logo.svg';
import './App.css';

import BlueButton from './BlueButton';
import RedButton from './RedButton';
import YellowButton from './YellowButton';

import Card from './Card';


const App = () => (
  <>
    {/* <h2>Buttons</h2>
    <BlueButton>En blå knapp</BlueButton>
    <RedButton>En röd knapp</RedButton>
    <YellowButton>En gul knapp</YellowButton> */}

    <h2>Card component</h2>
    {/* <Card header="Mitt kort" body={<>Lorem ipsum <BlueButton>En blå knapp</BlueButton></>}></Card> */}
    <Card>
      <Card.Title>Mitt kort</Card.Title>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, nisi id sagittis gravida, libero mauris fringilla ipsum, eu sollicitudin sapien lorem ac felis. Quisque eleifend quam ac turpis iaculis auctor. Praesent venenatis euismod facilisis. Aliquam blandit, nunc ac lacinia tincidunt, tortor magna congue erat, accumsan vulputate lacus erat quis arcu. Integer quis elementum augue. Nullam at vulputate justo, maximus vestibulum magna. Quisque rhoncus in augue eu consequat.
        <BlueButton>En blå knapp</BlueButton>
      </Card.Body>
    </Card>

    <Card darkMode={true}>
      <Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, nisi id sagittis gravida, libero mauris fringilla ipsum, eu sollicitudin sapien lorem ac felis. Quisque eleifend quam ac turpis iaculis auctor. Praesent venenatis euismod facilisis. Aliquam blandit, nunc ac lacinia tincidunt, tortor magna congue erat, accumsan vulputate lacus erat quis arcu. Integer quis elementum augue. Nullam at vulputate justo, maximus vestibulum magna. Quisque rhoncus in augue eu consequat.
        <BlueButton>En blå knapp</BlueButton>
      </Card.Body>
      <Card.Title>Mitt kort</Card.Title>
    </Card>

  </>
)

export default App;
