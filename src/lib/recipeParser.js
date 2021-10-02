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
        width: 350,
        height: 400,
        radius: 100,
    },
    "8oz cappuccino mug": {
        capacityOz: 8,
        width: 350,
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
        "fine-ground-coffee": x.fineGroundCoffeeOz / capacityOz,
        "condensed-milk": x.condensedMilkOz / capacityOz,
        "cream": x.creamOz / capacityOz,
        "hot-chocolate": x.hotChocolateOz / capacityOz,
        "instant-coffee": x.instantCoffeeOz / capacityOz,
        "half-and-half": x.halfAndHalfOz / capacityOz,
        crema: x.order.includes("crema"),
        "simple-syrup": x.order.includes("simple-syrup"),
        foam: foamTypeMap[x.foamType],
        ice: Boolean(x.ice),
        sugar: Boolean(x.sugar),
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
    1: "Super quick",
    2: "Quick",
    3: "Regular",
    4: "Kind of long",
    5: "Long",
}

let speeds = [...new Set(parsedRecipes.map(x => x.speed))];
speeds = speeds.map(x => ({ value: x, label: speedMap[x] }));

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

export { 
    parsedRecipes,
    countries,
    glassTypes,
    temperatures,
    speeds,
};