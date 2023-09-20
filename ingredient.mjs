import { Effect } from "./effect.mjs";

export class Ingredient{
    constructor(name, effects, value, weight){
        this.name    = name;
        this.effects = effects;
        this.value   = value;
        this.weight  = weight;
    }

    static from({name, effects, value, weight}){
        return new Ingredient(
            name,
            effects.map(effect => Effect.from(effect)),
            value,
            weight
        );
    }
}

export function hasName(name){
    return this.name === name;
}

export function findCommonEffects(otherIngredient){
    return this.effects.filter(effect => otherIngredient.hasEffect(effect));
}

export function hasEffect(effect) {
    return this.effects.some(candidate => effect.name === candidate.name);
}