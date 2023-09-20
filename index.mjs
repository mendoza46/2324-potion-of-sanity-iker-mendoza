import {getData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import { Cauldron } from "./cauldron.mjs";

const execute = async () => {
    try{
        const data = await getData();

        // showIngredients(data);
        // console.log(data);
        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //Creamos el caldero de pociones
        const cauldron = new Cauldron(ingredients);
        console.log(cauldron)

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