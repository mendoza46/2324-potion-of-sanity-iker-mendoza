import { Ingredient } from "./ingredient.mjs";

export class Ingredients {
    constructor(ingredients){
        ingredients = Ingredient;
    }

    static load(data) {
        return new Ingredients(data.ingredients.map(Ingredient.from));
    }
}