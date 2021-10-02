import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Select from 'react-select'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { CoffeeCup } from "./components";
import { parsedRecipes, countries, glassTypes, temperatures, speeds } from "./lib/recipeParser";
import { getFlag } from "./lib/utils";

function makespeedScale (speed) {
  return <div>
    { [...Array(speed)].map((_, i) => (
      <img 
        key={i.toString()}
        className="speed" 
        alt={`${speed}-speed`} 
        src={`${process.env.PUBLIC_URL}/icons/clock.png`} 
      />
    )) }
  </div>
}

function App() {
  
  const [recipes, setRecipes] = useState(parsedRecipes);
  const [country, setCountry] = useState(null);
  const [glassType, setGlassType] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [speed, setSpeed] = useState(null);

  return (
    <div className="App">
      <Container>
        <Form className="filters">
          <Row>
            <Form.Group as={Col} md={3} xs={12}>
              <Form.Label>Temperature</Form.Label>
              <Select 
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                options={temperatures} 
                value={temperature}
                onChange={s => {
                  const recipesCopy = parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  setTemperature(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (country ? x.country === country.value : 1)
                      && (glassType ? x.glassType === glassType.value : 1)
                      && (s ? x.temperature === s.value : 1)
                      && (speed ? x.speed === speed.value : 1)
                  });
                  setRecipes(newRecipes);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md={3} xs={12}>
              <Form.Label>Speed</Form.Label>
              <Select 
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                options={speeds} 
                value={speed}
                onChange={s => {
                  const recipesCopy = parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  setSpeed(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (country ? x.country === country.value : 1)
                      && (glassType ? x.glassType === glassType.value : 1)
                      && (temperature ? x.temperature === temperature.value : 1)
                      && (s ? x.speed === s.value : 1)
                  });
                  setRecipes(newRecipes);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md={3} xs={12}>
            <Form.Label>Country</Form.Label>
              <Select 
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                options={countries} 
                value={country}
                onChange={s => {
                  const recipesCopy = parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  setCountry(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (s ? x.country === s.value : 1)
                      && (glassType ? x.glassType === glassType.value : 1)
                      && (temperature ? x.temperature === temperature.value : 1)
                      && (speed ? x.speed === speed.value : 1)
                  });
                  setRecipes(newRecipes);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md={3} xs={12}>
              <Form.Label>Glass type</Form.Label>
              <Select 
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                options={glassTypes} 
                value={glassType}
                onChange={s => {
                  const recipesCopy = parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  setGlassType(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (country ? x.country === country.value : 1)
                      && (s ? x.glassType === s.value : 1)
                      && (temperature ? x.temperature === temperature.value : 1)
                      && (speed ? x.speed === speed.value : 1)
                  });
                  setRecipes(newRecipes);
                }}
              />
            </Form.Group>
          </Row>
        </Form>

        <Row xs={1} md={3} className="g-3">
          { recipes.map((x, i) => (
            <Col key={ i.toString() }>
              <Card>
                <CoffeeCup {...x} />
                <div className="coffee-description">
                  { makespeedScale(x.speed) }
                  { getFlag(x.country) }
                  <span className="coffee-name">
                    {x.name}
                  </span>
                  <br></br>
                  <span className="coffee-glass-type">
                    ({ x.glassType })
                  </span>
                </div>
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
    </div>
  );
}

export default App;
