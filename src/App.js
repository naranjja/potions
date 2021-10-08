import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Filters, Drink, Footer } from "./components";
import { parsedRecipes, parsedNames, drinkTypes, countries, glassTypes, temperatures, speeds } from "./lib/recipeParser";
import { getFlag, makespeedScale } from "./lib/utils";

function App() {
  
  const [recipes, setRecipes] = useState(parsedRecipes);
  const [names, setNames] = useState(parsedNames);
  const [drinkType, setDrinkType] = useState(null);
  const [country, setCountry] = useState(null);
  const [glassType, setGlassType] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <Container className="main-container">
        <div className="title">
        Recepi
        </div>
        <div className="subtitle">
          A simplified and personal collection of { Math.floor(parsedRecipes.length / 10) * 10 }+ recipes I made out of boredom.
        </div>
        
        <Filters 
          parsedRecipes={parsedRecipes}
          setRecipes={setRecipes}

          parsedNames={parsedNames}
          setNames={setNames}

          drinkTypes={drinkTypes}
          drinkType={drinkType}
          setDrinkType={setDrinkType}
          
          temperatures={temperatures}
          temperature={temperature}
          setTemperature={setTemperature}

          speeds={speeds}
          speed={speed}
          setSpeed={setSpeed}
          
          countries={countries}
          country={country}
          setCountry={setCountry}

          glassTypes={glassTypes}
          glassType={glassType}
          setGlassType={setGlassType}

          names={names}
          name={name}
          setName={setName}
        />

        { recipes.length > 0 ? (
          <Row xs={1} md={2} xl={3} className="g-3">
            { recipes.map((x, i) => (
              <Col key={ i.toString() }>
                <Card>
                  <Drink {...x} />
                  <div className="drink-description">
                    { makespeedScale(x.speed) }
                    { getFlag(x.country) }
                    <span className="drink-name">
                      {x.name}
                    </span>
                    <br></br>
                    <span className="drink-glass-type">
                      ({ x.glassType })
                    </span>
                  </div>
                </Card>
              </Col>
            )) }
          </Row>
        ) : (
          <span>😥 No recipes that match those filters (yet!)</span>
        ) }

      </Container>
      <Footer text="Made with ☕ 🍵 🍹 by Jose Naranjo" />
    </div>
  );
}

export default App;
