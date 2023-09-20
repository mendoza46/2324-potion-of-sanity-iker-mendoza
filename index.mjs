import {getAllIngredients} from "./service.mjs";

const fetchAsyncData = async () => {
    try{
        const result = await getAllIngredients();
        console.log(result);
    } catch (error){
        console.log(error.message);
    }
} 

fetchAsyncData();