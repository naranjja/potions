import "./Filters.css";
import Select, { components } from 'react-select'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDrinkTypeIcon, getTemperatureIcon, makespeedScale } from "../../lib/utils";

const DrinkTypeOption = (props) => (
  <components.Option {...props}>
    <div>
      { getDrinkTypeIcon(props.data.value) } { props.data.label }
    </div>
  </components.Option>
);

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

export default function Filters (props) {
    return (
        <Form className="filters">
          <Row>
            <Form.Group as={Col} xs={12} lg={3}>
              <Form.Label>
                <FontAwesomeIcon className="filter-label-icon" icon="sliders-h" />
                Drink type
              </Form.Label>
              <Select 
                isSearchable={false}
                menuPortalTarget={document.body} 
                styles={{ 
                  control: base => ({...base, padding: 5}), 
                  menuPortal: base => ({ ...base, zIndex: 9999 }) 
                }}
                options={props.drinkTypes} 
                components={{ Option: DrinkTypeOption }}
                value={props.drinkType}
                onChange={s => {
                  const recipesCopy = props.parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  props.setDrinkType(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                    && (s ? x.drinkType.includes(s.value) : 1)
                    && (props.country ? x.country === props.country.value : 1)
                    && (props.glassType ? x.glassType === props.glassType.value : 1)
                    && (props.temperature ? x.temperature === props.temperature.value : 1)
                    && (props.speed ? x.speed === props.speed.value : 1)
                  });
                  props.setRecipes(newRecipes);
                  props.setName(null);
                  props.setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
                }}
              />
            </Form.Group>
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
                options={props.temperatures} 
                components={{ Option: TemperatureOption }}
                value={props.temperature}
                onChange={s => {
                  const recipesCopy = props.parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  props.setTemperature(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (props.drinkType ? x.drinkType === props.drinkType.value : 1)
                      && (props.country ? x.country === props.country.value : 1)
                      && (props.glassType ? x.glassType === props.glassType.value : 1)
                      && (s ? x.temperature === s.value : 1)
                      && (props.speed ? x.speed === props.speed.value : 1)
                  });
                  props.setRecipes(newRecipes);
                  props.setName(null);
                  props.setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
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
                options={props.speeds} 
                components={{ Option: SpeedOption }}
                value={props.speed}
                onChange={s => {
                  const recipesCopy = props.parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  props.setSpeed(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (props.drinkType ? x.drinkType === props.drinkType.value : 1)
                      && (props.country ? x.country === props.country.value : 1)
                      && (props.glassType ? x.glassType === props.glassType.value : 1)
                      && (props.temperature ? x.temperature === props.temperature.value : 1)
                      && (s ? x.speed === s.value : 1)
                  });
                  props.setRecipes(newRecipes);
                  props.setName(null);
                  props.setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
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
                options={props.glassTypes} 
                value={props.glassType}
                onChange={s => {
                  const recipesCopy = props.parsedRecipes.slice(0);
                  if (s.value === "all") {
                    s = null;
                  }
                  props.setGlassType(s);
                  const newRecipes = recipesCopy.filter(x => {
                    return 0 !== 1 
                      && (props.drinkType ? x.drinkType === props.drinkType.value : 1)
                      && (props.country ? x.country === props.country.value : 1)
                      && (s ? x.glassType === s.value : 1)
                      && (props.temperature ? x.temperature === props.temperature.value : 1)
                      && (props.speed ? x.speed === props.speed.value : 1)
                  });
                  props.setRecipes(newRecipes);
                  props.setName(null);
                  props.setNames(newRecipes.map(x => ({ value: x.name, label: x.name })));
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
                options={props.names} 
                value={props.name}
                onChange={s => {
                  props.setName(s);
                  const recipesCopy = props.parsedRecipes.slice(0);
                  const newRecipes = recipesCopy.filter(x => {
                    return s ? x.name === s.value : 1
                  });
                  props.setRecipes(newRecipes);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={12}>
                <div className="d-grid">
                  <Button variant="secondary" size="lg" onClick={() => {
                    props.setDrinkType(null);
                    props.setTemperature(null);
                    props.setSpeed(null);
                    props.setCountry(null);
                    props.setGlassType(null);
                    props.setName(null);
                    const recipesCopy = props.parsedRecipes.slice(0);
                    const namesCopy = props.parsedNames.slice(0);
                    props.setRecipes(recipesCopy);
                    props.setNames(namesCopy);
                  }}>
                    <FontAwesomeIcon className="filter-label-icon" icon="trash-alt" />
                    Reset filters
                  </Button>
                </div>
              </Form.Group>
          </Row>
        </Form>
    )
}