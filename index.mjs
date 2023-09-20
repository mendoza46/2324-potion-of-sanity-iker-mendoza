import {getData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";

const execute = async () => {
    try{
        const data = await getData();

        showIngredients(data);
        // console.log(data);
        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

    } catch{
        //ERROR
    }
} 

execute();

const showIngredients = (data) => {
    data.ingredients.forEach(element => {
        console.log(`${element.name}: `)
        console.log(element.effects)
    });
}