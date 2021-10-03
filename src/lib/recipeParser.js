import recipes from "../data/recipes.json";
import { toTitleCase } from "./utils";

const glassTypeMap = {
    "3oz demitasse": {
        capacityOz: 3,
        width: 250,
        height: 300,
        radius: 80,
    },
    "5oz tasse": {
        capacityOz: 5,
        width: 300,
        height: 400,
        radius: 100,
    },
    "7oz tasse": {
        capacityOz: 7,
        width: 340,
        height: 400,
        radius: 100,
    },
    "8oz cappuccino mug": {
        capacityOz: 8,
        width: 340,
        height: 256,
        radius: 64,
    },
    "11oz tumbler glass": {
        capacityOz: 11,
        width: 256,
        height: 464,
        radius: 32,
    },    
};

const foamTypeMap = {
    "very low": 0.05,
    low: 0.15, 
    high: 0.20,
};

const parsedRecipes = recipes.map(x => {
    const { capacityOz, width, height, radius } = glassTypeMap[x.glassType];
    return {
        ...x,
        width,
        height,
        radius,
        coffee: x.coffeeOz / capacityOz,
        milk: x.milkOz / capacityOz,
        water: x.waterOz / capacityOz,
        matcha: x.matchaOz / capacityOz,
        chai: x.chaiOz / capacityOz,
        "dripped-coffee": x.drippedCoffeeOz / capacityOz,
        "decaf-dripped-coffee": x.decafDrippedCoffeeOz / capacityOz,
        "condensed-milk": x.condensedMilkOz / capacityOz,
        "cream": x.creamOz / capacityOz,
        "hot-chocolate": x.hotChocolateOz / capacityOz,
        "instant-coffee": x.instantCoffeeOz / capacityOz,
        "half-and-half": x.halfAndHalfOz / capacityOz,
        beer: x.beerOz / capacityOz,
        brandy: x.brandyOz / capacityOz,
        "heavy-cream": x.heavyCreamOz / capacityOz,
        "lemon-juice": x.lemonJuiceOz / capacityOz,
        amaretto: x.amarettoOz / capacityOz,
        whiskey: x.whiskeyOz / capacityOz,
        "grapefruit-juice": x.grapefruitJuiceOz / capacityOz,
        tequila: x.tequilaOz / capacityOz,
        "tonic-water": x.tonicWaterOz / capacityOz,
        crema: x.order.includes("crema"),
        "simple-syrup": x.order.includes("simple-syrup"),
        "lemon-syrup": x.order.includes("lemon-syrup"),
        caramel: x.order.includes("caramel"),
        foam: foamTypeMap[x.foamType],
        ice: Boolean(x.ice),
        sugar: Boolean(x.sugar),
        lemon: Boolean(x.lemon),
        iceCream: Boolean(x.iceCream),
        order: x.order,
    }
});

let countries = [...new Set(parsedRecipes.map(x => x.country))];
countries = countries.map(x => ({ value: x, label: toTitleCase(x) }));

let glassTypes = [...new Set(parsedRecipes.map(x => x.glassType))];
glassTypes = glassTypes.map(x => ({ value: x, label: toTitleCase(x) }));

let temperatures = [...new Set(parsedRecipes.map(x => x.temperature))];
temperatures = temperatures.map(x => ({ value: x, label: toTitleCase(x) }));

const speedMap = {
    1: "Quick",
    2: "Normal",
    3: "Long",
}

let speeds = [...new Set(parsedRecipes.map(x => x.speed))];
speeds = speeds.sort();
speeds = speeds.map(x => ({ value: x, label: speedMap[x] }));

let names = [...new Set(parsedRecipes.map(x => x.name))];
names = names.map(x => ({ value: x, label: toTitleCase(x) }));

countries.unshift({
    value: "all",
    label: "All"
});

glassTypes.unshift({
    value: "all",
    label: "All"
});

temperatures.unshift({
    value: "all",
    label: "All"
});

speeds.unshift({
    value: "all",
    label: "All"
});

names.unshift({
    value: "all",
    label: "All"
});

export { 
    parsedRecipes,
    countries,
    glassTypes,
    temperatures,
    speeds,
    names,
};