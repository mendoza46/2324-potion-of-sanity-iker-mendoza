import {getData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";

const execute = async () => {
    try{
        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

    } catch{
        //ERROR
    }
} 

execute();