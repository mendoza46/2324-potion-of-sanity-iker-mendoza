export const getAllIngredients = async () => {
    return fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json')
    .then(response => response.json())
}