import { Ingredient } from "./ingredient.mjs";

export class Ingredients {
    constructor(ingredients){
        ingredients = Ingredient;
    }

    static load(data) {
        return new Ingredients(data.ingredients.map(Ingredient.from));
    }
}

export function find(name) {
    const ingredient = this.ingredients.find(element => element.hasName(name));
    if(ingredient === undefined)
        throw new Error(`Unknown ingredient ${name}`);

    return ingredient;
}

