import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Select, { components } from 'react-select'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CoffeeCup, Footer } from "./components";
import { parsedRecipes, parsedNames, countries, glassTypes, temperatures, speeds } from "./lib/recipeParser";
import { getTemperatureIcon, getFlag, makespeedScale } from "./lib/utils";

const TemperatureOption = (props) => (
  <components.Option {...props}>
    <div>
      { getTemperatureIcon(props.data.value) } { props.data.label }
    </div>
  </components.Option>
);

const SpeedOption = (props) => (
  <components.Option {...props}>
    <div>
      { makespeedScale(props.data.value) } { props.data.label }
    </div>
  </components.Option>
);

const CountryOption = (props) => (
  <components.Option {...props}>
    <div>
      { getFlag(props.data.value) } { props.data.label }
    </div>
  </components.Option>
);

function App() {
  
  const [recipes, setRecipes] = useState(parsedRecipes);
  const [names, setNames] = useState(parsedNames);
  const [country, setCountry] = useState(null);
  const [glassType, setGlassType] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <Container className="main-container">
        <div className="title">
          Coffee Book
        </div>
        <div className="subtitle">
          A simplified and personal collection of { Math.floor(parsedRecipes.length / 10) * 10 }+ coffee recipes I made out of boredom.
        </div>
        <Form className="filters">
          <Row>
            <Form.Group as={Col} xs={12} lg={3}>
              <Form.Label>
                <FontAwesomeIcon className="filter-label-icon" icon="thermometer-half" />
                Temperature
              </Form.Label>
              <Select 
                isSearchable={false}
                menuPortalTarget={document.body} 
                styles={{ 
                  control: base => ({...base, padding: 5}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
                options={temperatures} 
                components={{ Option: TemperatureOption }}
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
                  setName(null);
                  setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} lg={3}>
              <Form.Label>
                <FontAwesomeIcon className="filter-label-icon" icon="clock" />
                Speed
              </Form.Label>
              <Select 
                isSearchable={false}
                menuPortalTarget={document.body} 
                styles={{ 
                  control: base => ({...base, padding: 5}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
                options={speeds} 
                components={{ Option: SpeedOption }}
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
                  setName(null);
                  setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} lg={3}>
              <Form.Label>
                <FontAwesomeIcon className="filter-label-icon" icon="globe-americas" />
                Country
              </Form.Label>
              <Select 
                isSearchable={false}
                menuPortalTarget={document.body} 
                styles={{ 
                  control: base => ({...base, padding: 5}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
                options={countries} 
                components={{ Option: CountryOption }}
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
                  setName(null);
                  setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} lg={3}>
              <Form.Label>
                <FontAwesomeIcon className="filter-label-icon" icon="glass-whiskey" />
                Glass type
              </Form.Label>
              <Select 
                isSearchable={false}
                menuPortalTarget={document.body} 
                styles={{ 
                  control: base => ({...base, padding: 5}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
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
                  setName(null);
                  setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={12}>
              <Form.Label style={{ width: "100%", textAlign: "left" }}>
                <FontAwesomeIcon className="filter-label-icon" icon="search" />
                Search
              </Form.Label>
              <Select 
                placeholder="Search for a specific recipe..."
                isSearchable={true}
                menuPortalTarget={document.body} 
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator:() => null,
                }}
                styles={{ 
                  control: base => ({...base, padding: 5, textAlign: "left"}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
                options={names} 
                value={name}
                onChange={s => {
                  setName(s);
                  const recipesCopy = parsedRecipes.slice(0);
                  const newRecipes = recipesCopy.filter(x => {
                    return s ? x.name === s.value : 1
                  });
                  setRecipes(newRecipes);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={12}>
                <div className="d-grid">
                  <Button variant="secondary" size="lg" onClick={() => {
                    setTemperature(null);
                    setSpeed(null);
                    setCountry(null);
                    setGlassType(null);
                    setName(null);
                    const recipesCopy = parsedRecipes.slice(0);
                    const namesCopy = parsedNames.slice(0);
                    setRecipes(recipesCopy);
                    setNames(namesCopy);
                  }}>
                    <FontAwesomeIcon className="filter-label-icon" icon="trash-alt" />
                    Reset
                  </Button>
                </div>
              </Form.Group>
          </Row>
        </Form>

        { recipes.length > 0 ? (
          <Row xs={1} md={2} xl={3} className="g-3">
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
        ) : (
          <span>😥 No recipes that match those filters (yet!)</span>
        ) }

      </Container>
      <Footer text="Made with lots of ☕ by Jose Naranjo" />
    </div>
  );
}

export default App;
